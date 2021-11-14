import { useRef, useState } from "react";

enum Operators {
    add, substract, multiply, divide
}

export const useCalculator = () => {
    
    const [total, setTotal] = useState('0');
    const [subTotal, setSubTotal] = useState('0');
    const lastOperation = useRef<Operators>();

    const clean = () => {
        setTotal('0');
        setSubTotal('0')
    }

    const buildNumber = (textNumber: string) => {

        // No aceptar doble punto
        if (total.includes('.') && textNumber === '.') {
            return;
        }

        if (total.startsWith('0') || total.startsWith('-0')) {

            // Punto decimal
            if (textNumber === '.') {
                setTotal(total + textNumber);

            // Evaluar si es otro cero y hay un punto
            }else if (textNumber === '0' && total.includes('.')) {
                setTotal( total + textNumber);
             
            // Evaluar si es diferente de cero y hay un punto
            }else if (textNumber !== '0' && !total.includes('.')) {
                setTotal(textNumber);

            //Evitar el 000.000
            }else if (textNumber === '0' && !total.includes('.')) {
                setTotal(total);
            }else{
                setTotal(total + textNumber);
            }


        }else{
            setTotal( total + textNumber); 
        }
    }

    const totalDelete = () => {

        if (total.length === 2 && total.includes('-')) {
            setTotal('0');
        }else if(total.length === 1){
            setTotal('0');
        }else{
            setTotal(total.slice(0,-1));
        }
    }

    const setPositiveNegative = () => {
        
        if (total.includes('-')) {
            setTotal(total.replace('-', ''));
        }else if(total !== '0'){
            setTotal('-' + total);
        }
    }

    const changeNumber = () => {
        if (total.endsWith('.')) {
            setSubTotal(total.slice(0,-1));
        }else{
            setSubTotal(total);
        }
        setTotal('0');
    }

    const btnDivide = () => {
        changeNumber();
        lastOperation.current = Operators.divide;
    }

    const btnMultiply = () => {
        changeNumber();
        lastOperation.current = Operators.multiply;
    }

    const btnSubstract = () => {
        changeNumber();
        lastOperation.current = Operators.substract;
    }

    const btnAdd = () => {
        changeNumber();
        lastOperation.current = Operators.add;
    }

    const calculate = () => {
        const num1 = Number(subTotal);
        const num2 = Number(total);

        switch (lastOperation.current) {
            case Operators.add:
                setTotal(`${num1 + num2}`);
                break;

            case Operators.substract:
                setTotal(`${num1 - num2}`);
                break;

            case Operators.multiply:
                setTotal(`${num1 * num2}`);
                break;
    
            case Operators.divide:
                setTotal(`${num1 / num2}`);
                break;

        }

        setSubTotal('0');
    }

    return {
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
    }
}
