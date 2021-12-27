import { useContext } from 'react';
import Image from 'next/image';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent={'center'} alignItems={'center'} marginRight={'1'}>
      <Icon
        as={FaArrowAltCircleLeft}
        fontSize={'2xl'}
        cursor={'pointer'}
        onClick={() => scrollPrev()}
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent={'center'} alignItems={'center'} marginLeft={'1'}>
      <Icon
        as={FaArrowAltCircleRight}
        fontSize={'2xl'}
        cursor={'pointer'}
        onClick={() => scrollNext()}
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id}
          width={[250, 400, 500, 454]}
          height={[200, 300, 300, 300]}
          itemId={item.id}
          overflow={'hidden'}
          position={'relative'}
          m={'0.5'}
        >
          <Image
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            layout="fill"
            alt={'property'}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageScrollbar;
