import { render, screen, fireEvent } from "@testing-library/react" 
import { CounterApp } from "../src/CounterApp"

describe('pruebas en el <CounterApp />', () => {
    const initialValue = 10;

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el valor inicial de 100 <CounterApp value={10}/>', () => {
        render(<CounterApp value={initialValue}/>);
        expect(screen.getByText(10)).toBeTruthy();
        // expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
    })

    test('debe de incrementar con el boton +1', () => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
    })

    test('debe de decrementar con el boton -1', () => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
    })

    test('debe de funcionoar el boton de reset', () => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
        // fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByText('10')).toBeTruthy();
    })
  
})
