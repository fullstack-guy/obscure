import Image from 'next/image'

import CardImage from '@/app/assets/images/spyro-card.png'

interface ISpyroCard {
  className: string
} 

const SpyroCard = ({ className }: ISpyroCard) => {
  return (
    <div className={`${className} rounded-lg shrink-0`}>
      <Image src={CardImage} alt='spyro card image' width={495} height={309} />
    </div>
  )
}

export default SpyroCard
