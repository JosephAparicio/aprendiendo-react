import { render, screen} from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('deeb de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'http://localhost/saitama.jpg'
        },
        {
            id: '123',
            title: 'Genos',
            url: 'http://localhost/genos.jpg'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    })
    
  
})
