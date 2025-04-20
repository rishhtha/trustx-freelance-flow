
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Wallet } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnectWallet = () => {
    // Mock wallet connection
    const mockAddress = '0x' + Math.random().toString(16).slice(2, 12);
    setWalletAddress(mockAddress);
    setIsConnected(true);
  };

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
              <span className="font-bold text-white">Tx</span>
            </div>
            <span className="font-bold text-xl">TrustX</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/marketplace" className="text-muted-foreground hover:text-foreground">
              Marketplace
            </Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground">
              How It Works
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isConnected ? (
            <Button variant="outline" className="flex items-center gap-2">
              <Wallet size={16} />
              <span className="truncate max-w-[100px]">{walletAddress}</span>
            </Button>
          ) : (
            <Button onClick={handleConnectWallet} className="flex items-center gap-2">
              <Wallet size={16} />
              Connect Wallet
            </Button>
          )}
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/marketplace" 
              className="px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              to="/dashboard" 
              className="px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/how-it-works" 
              className="px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            {isConnected ? (
              <Button variant="outline" className="flex items-center gap-2">
                <Wallet size={16} />
                <span className="truncate max-w-[150px]">{walletAddress}</span>
              </Button>
            ) : (
              <Button onClick={handleConnectWallet} className="flex items-center gap-2">
                <Wallet size={16} />
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
