import { Tooltip } from 'antd'
import { ReactComponent as Metamask } from '../../../../assets/metamask.svg'
import { ReactComponent as Gnosis } from '../../../../assets/gnosis.svg'
import { ReactComponent as XDai } from '../../../../assets/xDai.svg'
import { connectWallet, handleConnectGnosis } from '../../../../Blockchain/methods'
import { useContext } from 'react'
import ComboContext from '../../../../Context/ComboContext'

const BlockchainConnect = () => {
  const { handleUpdateAccount, handleUpdateIsSpinner } = useContext(ComboContext)

  const handleConnectWallet = async () => {
    handleUpdateIsSpinner(true)
    const account = await connectWallet()
    handleUpdateIsSpinner(false)

    handleUpdateAccount(account)
  }

  return (
    <div className='blockchain-connect'>
      <Tooltip placement='topLeft' title={'Metamask will install all the chiado chain configurations'}>
        <div className='blockchain-connect_btn' onClick={handleConnectGnosis}>
          Gnosis config
        </div>
        <div className='blockchain-connect_btn-small' onClick={handleConnectGnosis}>
          <Gnosis />
        </div>
      </Tooltip>
      <Tooltip
        placement='topLeft'
        title={'In the network field chose Chiado Testnet(xDai) and then paste your wallet address'}
      >
        <a className='blockchain-connect_btn' rel='noreferrer' target='_blank' href='https://gnosisfaucet.com/'>
          XDai faucet
        </a>
        <a className='blockchain-connect_btn-small' rel='noreferrer' target='_blank' href='https://gnosisfaucet.com/'>
          <XDai />
        </a>
      </Tooltip>

      <Tooltip placement='topLeft' title={'Connect metamask to the dapp'}>
        <div className='blockchain-connect_btn' onClick={handleConnectWallet}>
          Connect wallet
        </div>
        <div className='blockchain-connect_btn-small' onClick={handleConnectWallet}>
          <Metamask />
        </div>
      </Tooltip>
    </div>
  )
}

export default BlockchainConnect
