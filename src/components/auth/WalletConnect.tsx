
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Wallet } from 'lucide-react';

interface WalletConnectProps {
  onConnect: (address: string) => void;
}

const WalletConnect = ({ onConnect }: WalletConnectProps) => {
  const [open, setOpen] = useState(false);

  // Mock wallet connection
  const connectMetamask = () => {
    const mockAddress = '0x' + Math.random().toString(16).slice(2, 12);
    onConnect(mockAddress);
    setOpen(false);
  };
  
  const connectWalletConnect = () => {
    const mockAddress = '0x' + Math.random().toString(16).slice(2, 12);
    onConnect(mockAddress);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} className="flex items-center gap-2">
        <Wallet size={16} />
        Connect Wallet
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Connect Wallet</DialogTitle>
            <DialogDescription>
              Connect your wallet to access the TrustX platform.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button onClick={connectMetamask} variant="outline" className="flex justify-start gap-3 h-16">
              <img
                src="https://metamask.io/images/metamask-fox.svg"
                alt="MetaMask"
                className="h-8 w-8"
              />
              <div className="text-left">
                <p className="font-medium">MetaMask</p>
                <p className="text-xs text-muted-foreground">Connect with your MetaMask wallet</p>
              </div>
            </Button>
            
            <Button onClick={connectWalletConnect} variant="outline" className="flex justify-start gap-3 h-16">
              <img
                src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg"
                alt="WalletConnect"
                className="h-8 w-8"
              />
              <div className="text-left">
                <p className="font-medium">WalletConnect</p>
                <p className="text-xs text-muted-foreground">Connect with your mobile wallet</p>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WalletConnect;
