import { ILinksFooter } from "@/models/intefaces/all";



const groupLinks: ILinksFooter[] = [
    {
        title: 'Página',
        arrayLinks: [
            { label: 'Página Inicial', link: '/' },
            { label: 'Imóveis', link: '/immobile' },
            { label: 'Sobre', link: '/contact' }
        ]
    },
    {
        title: 'Links',
        arrayLinks: [
            { label: 'Políticas de privacidade', link: '/privacyPolicy' },
            { label: 'Termos de uso', link: '/useTerms' },
            { label: 'Saiba Mais', link: '/knowMore' }
        ]
    },
    {
        title: 'Contato',
        arrayLinks: [
            { label: '(77) 9 9999-9999', link: `https://wa.me/7799999-9999?text=Ol%C3%A1!` },
            { label: 'paraisodasguas@gmail.com', link: 'paraisodasguas@gmail.com' }
        ]
    }
]
export default groupLinks;