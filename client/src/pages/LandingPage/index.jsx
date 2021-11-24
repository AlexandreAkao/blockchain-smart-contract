import React, { useEffect } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { drizzleReactHooks } from "@drizzle/react-plugin";

import { buyConfig } from '../../config/buyTreeAlertConfig';
import TreeCard from '../../components/TreeCard';
import trees from '../../data/trees.json';

import { 
  TreeListContainer,
  LandingPageContainer,
  LandingPageTitle
} from './styled';

const MySwal = withReactContent(Swal)
const ongAddress = "0x46b5DCDb8c0A41f1ad15Be6EA7CDC9D68e2A28D4";
const { useDrizzle, useDrizzleState } = drizzleReactHooks;

const LandingPage = () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);

  useEffect(() => {
    drizzle.contracts.Tree.methods.setOng(ongAddress).send();
  }, [drizzle.contracts.Tree.methods])


  const handleButtonClick = async ({ name, cost }) => {
    const { isConfirmed, value } = await MySwal.fire(buyConfig(name, cost))
    if (isConfirmed) {
      await drizzle
        .contracts
        .Tree
        .methods
        .confirmPurchase(cost, parseInt(value))
        .send({ 
          from: state.accounts[1],
          value: cost * (10 ** 18),
          gasPrice: '10000000000000',
          gas: 1000000
        });
    }
  }

  return (
    <LandingPageContainer>
      <LandingPageTitle>CRYPTOTREE</LandingPageTitle>
      <TreeListContainer>
        {trees.map(tree => 
            <TreeCard
              key={tree.name}
              tree={tree} 
              handleButton={
                () => handleButtonClick({
                  name: tree.name,
                  cost: tree.price
                })
              } 
            />
          )}
      </TreeListContainer>
    </LandingPageContainer>
  )
}

export default LandingPage;