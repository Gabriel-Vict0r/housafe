
import Leads from '@/components/about/Leads'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import SubTitle from '@/components/shared/SubTitle'
import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutPage = (props: Props) => {
  return (
      <main className='mt-32'>
          <Header />
          <section className='flex justify-between flex-col p-5 gap-5 md:flex-row shadow-lg rounded-3xl'>
              <div className='flex flex-col justify-center'>
                  <p className='text-lg font-semibold text-secondary'>Como tudo começou</p>
                  <h1 className='text-3xl font-semibold text-primary leading-relaxed lg:text-4xl lg:leading-[60px]'>Nosso Sonho é <br /> Transformar o Mercado <br />Imobiliário</h1>
                  <a className='btn btn-outline my-5' href='#aboutMore'>Saiba Mais</a>
              </div>
              <Image src='/about.png' width={514} height={404.87} alt='equipe reunida' className='md:w-1/2'/>
          </section>
          <SubTitle
              subtitle='Nosso Objetivo'
              text='Simplificar e revolucionar a forma como as pessoas encontram e negociam imóveis.'
              inverted
          />
          <section className='flex flex-col lg:flex-row lg:gap-5 shadow-lg rounded-3xl p-3'>
              <p className='py-5 w-full lg:w-1/2 lg:px-2' id='aboutMore'>A Housafe nasceu do desejo de proporcionar mais segurança e confiança para quem busca realizar o sonho da casa própria ou encontrar o imóvel ideal. Fundada por especialistas com anos de experiência no mercado imobiliário, nossa missão é criar um ambiente digital onde compradores, vendedores e locatários se conectem de forma prática, transparente e segura.</p>
              <div className='p-5 grid grid-cols-2 grid-rows-2 gap-3 lg:gap-10'>
                  <Leads leads={3.2} label='Anos de Experiência' decimals={1}/>
                  <Leads leads={300} label='Imóveis disponíveis' sufix='+' decimals={0}/>
                  <Leads leads={50} label='Imóveis disponíveis' sufix='+' decimals={0}/>
                  <Leads leads={98} label='Anos de Experiência' sufix='%' decimals={0}/>
              </div>
          </section>
          <Footer />
    </main>
  )
}

export default AboutPage