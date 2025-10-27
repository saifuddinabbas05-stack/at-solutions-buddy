import atLogo from '@/assets/atlogo.svg';

export const LogoWithBgRemoval = () => {
  return (
    <img 
      src={atLogo} 
      alt="A&T Solutions Logo" 
      className="h-10 w-10 object-contain"
    />
  );
};
