'use client'
import { ILeads } from '@/models/intefaces/all';
import React from 'react'
import CountUp from 'react-countup';
type Props = {}

const Leads = ({leads, label, decimals, sufix}: ILeads) => {
  return (
      <div className=''>
      <CountUp end={leads} duration={2} decimals={decimals} className='font-bold text-primary text-3xl' suffix={sufix} />
          <p className='text-primary text-base font-light'>{label}</p>
    </div>
  )
}

export default Leads