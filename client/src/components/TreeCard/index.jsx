import React from 'react';
import { 
  FaEthereum,
  FaFlask,
  FaRulerVertical,
  FaPercent
} from 'react-icons/fa'

import { 
  TreeContainer,
  TreeImage,
  TreeNameContainer,
  TreeAttribute,
  TreeAttributeTitle,
  TreePriceContainer,
  TreePrice,
  TreeButton
} from './styled'

const TreeCard = ({ 
  tree: {
    name,
    scientific_name,
    height,
    probability,
    price,
    image
  },
  handleButton
}) => {

  return (
    <TreeContainer>
      <TreeImage src={image} />
      <TreeNameContainer>
        <span>{name}</span>
      </TreeNameContainer>
      <TreeAttribute>
        <FaFlask size={20} />
        <TreeAttributeTitle>Nome científico</TreeAttributeTitle>
        <span><u><i>{scientific_name}</i></u></span>
      </TreeAttribute>
      <TreeAttribute>
        <FaRulerVertical size={20} />
        <TreeAttributeTitle>Altura (m)</TreeAttributeTitle>
        <span>{height}</span>
      </TreeAttribute>
      <TreeAttribute>
        <FaPercent size={20} />
        <TreeAttributeTitle>Probabilidade</TreeAttributeTitle>
        <span>{probability}</span>
      </TreeAttribute>

      <TreePriceContainer>
        <TreePrice><FaEthereum color="#F1F2F2" size={34}/>{price}</TreePrice>
        <TreeButton onClick={handleButton}>Comprar</TreeButton>
      </TreePriceContainer>
    </TreeContainer>
  )
}

export default TreeCard;