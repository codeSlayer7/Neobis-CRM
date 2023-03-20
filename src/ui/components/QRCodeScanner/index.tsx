import { QRCode } from 'react-qrcode-logo';

interface QRCodeProps {
  value: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
}

const QRCodeScanner: React.FC<QRCodeProps> = ({
  value,
  size = 100,
  // bgColor = '#FFFFFF',
  // fgColor = '#000000',
}) => {
  return (
    <QRCode
      value={value}
      size={size}
      // bgColor={bgColor}
      // fgColor={fgColor}
      // className="w-full h-full"
    />
  );
};

export default QRCodeScanner;
