import { FirstApp } from "../src/FirstApp"
import { render, screen } from "@testing-library/react" 

describe('Pruebas en <FirstApp />', () => {
  const title = 'Hola soy Joseph'
  const subtitle = 'josephsubtitulo'

  test('debe de hacer un match con el snapshot', () => {
    const { container } = render(<FirstApp title={title}/>);
    expect( container).toMatchSnapshot();
  })

  test('debe de mostrar el mensaje "Hola soy Joseph"', () => {
    render(<FirstApp title={title}/>);
    expect(screen.getByText(title)).toBeTruthy();
  })

  test('debe de mostrar el titulo en un h1', () => {
    render(<FirstApp title={title}/>);
    expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subTitle={subtitle}/>);
    expect(screen.getAllByText(subtitle).length).toBe(1);
  })
  
})
