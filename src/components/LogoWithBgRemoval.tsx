import atLogo from '@/assets/atlogo.png';

export const LogoWithBgRemoval = () => {
  return (
    <img 
      src={atLogo} 
      alt="A&T Solutions Logo" 
      className="h-8 w-8 object-contain"
    />
  );
};
