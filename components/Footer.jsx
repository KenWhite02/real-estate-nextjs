import { Box } from '@chakra-ui/react';

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <Box
      textAlign={'center'}
      p={'5'}
      color={'gray.600'}
      borderTop={'1px'}
      borderColor={'gray.100'}
    >
      {year} Realtor, Inc. | Developed by Ken White
    </Box>
  );
};

export default Footer;
