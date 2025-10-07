import { useEffect, useState } from 'react';
import atLogo from '@/assets/atlogo.png';

export const LogoWithBgRemoval = () => {
  const [processedLogo, setProcessedLogo] = useState<string>(atLogo);

  useEffect(() => {
    const processLogo = async () => {
      try {
        const response = await fetch(atLogo);
        const blob = await response.blob();
        
        const img = new Image();
        img.src = URL.createObjectURL(blob);
        
        await new Promise((resolve) => {
          img.onload = resolve;
        });

        // Create canvas for background removal
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) return;
        
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Simple background removal: make white/light pixels transparent
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // If pixel is very light (close to white), make it transparent
          if (r > 240 && g > 240 && b > 240) {
            data[i + 3] = 0;
          }
        }

        ctx.putImageData(imageData, 0, 0);
        
        canvas.toBlob((blob) => {
          if (blob) {
            setProcessedLogo(URL.createObjectURL(blob));
          }
        }, 'image/png');
      } catch (error) {
        console.error('Error processing logo:', error);
      }
    };

    processLogo();
  }, []);

  return (
    <img 
      src={processedLogo} 
      alt="A&T Solutions Logo" 
      className="h-8 w-8 object-contain"
    />
  );
};
