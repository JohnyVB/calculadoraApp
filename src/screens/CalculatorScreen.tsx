import React, { useEffect }  from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { globalStyles } from '../theme/appTheme';
import { BtnCal } from '../components/BtnCal';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {

    const {
        subTotal,
        total,
        clean,
        setPositiveNegative,
        totalDelete,
        btnDivide,
        buildNumber,
        btnMultiply,
        btnSubstract,
        btnAdd,
        calculate
    } = useCalculator();

    useEffect(() => {
        SplashScreen.hide();
    }, []);


    return (
        <View style={globalStyles.container}>
            {/* Resultados */}
            <Text style={globalStyles.subtotal}>{(subTotal !== '0') && subTotal}</Text>
            <Text 
                style={globalStyles.total}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {total}
            </Text>

            {/* Fila 1 */}
            <View style={globalStyles.row}>

                <BtnCal title="C" color="gray" action={clean}/>
                <BtnCal title="+/-" color="gray" action={setPositiveNegative}/>
                <BtnCal title="DEL" color="gray" action={totalDelete}/>
                <BtnCal title="/" color="orange" action={btnDivide}/>

            </View>

            {/* Fila 2 */}
            <View style={globalStyles.row}>

                <BtnCal title="7" action={buildNumber}/>
                <BtnCal title="8" action={buildNumber}/>
                <BtnCal title="9" action={buildNumber}/>
                <BtnCal title="X" color="orange" action={btnMultiply}/>

            </View>

            {/* Fila 3 */}
            <View style={globalStyles.row}>

                <BtnCal title="4" action={buildNumber}/>
                <BtnCal title="5" action={buildNumber}/>
                <BtnCal title="6" action={buildNumber}/>
                <BtnCal title="-" color="orange" action={btnSubstract}/>

            </View>

            {/* Fila 4 */}
            <View style={globalStyles.row}>

                <BtnCal title="1" action={buildNumber}/>
                <BtnCal title="2" action={buildNumber}/>
                <BtnCal title="3" action={buildNumber}/>
                <BtnCal title="+" color="orange" action={btnAdd}/>

            </View>

            {/* Fila 5 */}
            <View style={globalStyles.row}>

                <BtnCal title="0" width action={buildNumber}/>
                {/* <BtnCal title="00"/> */}
                <BtnCal title="." action={buildNumber}/>
                <BtnCal title="=" color="orange" action={calculate}/>

            </View>


        </View>
    )
}

export default CalculatorScreen;
