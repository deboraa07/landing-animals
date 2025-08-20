"use client"

import useEmblaCarousel from 'embla-carousel-react';
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel} from 'lucide-react';
import {WhatsappLogoIcon} from '@phosphor-icons/react';


const services = [
    {
        title: "Banho e Tosa",
        description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    },
]

export function Services(){
    return(
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-4xl font-bold mb-12">Serviços</h2>

            <div className="relative">

            </div>

            
            </div>
        </section>
    )
}