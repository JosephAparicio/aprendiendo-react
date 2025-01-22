import { FirstApp } from "../src/FirstApp"
import { render } from "@testing-library/react" 

describe('Pruebas en <FirstApp />', () => {
//   test('debe de hacer match con el snapshot', () => {
//     const title = "Joseph titulo"
//     const {container} = render(<FirstApp title={title}/>);
//     expect(container).toMatchSnapshot();
//   })

  test('debe de mostrar el titulo en un h1', () => {
    const title = "Joseph titulo"
    const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  })
  
  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = "Joseph titulo";
    const subtitle = "soy un subtitulo";
    const {getAllByText} = render(<FirstApp title={title} subTitle={subtitle}/>);
    // expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
    expect(getAllByText(subtitle).length).toBe(1);
  })

})
