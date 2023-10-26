import { Flex, Grid, GridItem, Box, Text, Icon } from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";
import { FaTwitter, FaFacebook, FaInstagram,  FaLinkedin, FaGithub } from "react-icons/fa";

const Footer1 = () => {
  return (
    <Box as="footer" p={4} className="c-footer">
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {/* Column 1 - Logo */}
        <GridItem colSpan={1}>
        <img src="https://sheikhstudios.live/bs_tokens/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-23-at-09.59-1.png" className='logoimg logoimg11' alt="" />
        </GridItem>

        {/* Column 2 - Office Address */}
        <GridItem colSpan={1} className="cw">
        <strong>
          <Text>
            Office Address:
            <br />
          </Text>
          </strong>
          <Text>
          Bank Street
          </Text>
          <Text>
          Business Atrium Centre
          </Text>
          <Text>
          Khalid bin Waleed Road
          </Text>
          <Text>
          Bur Dubai. Office No. 310
          </Text>
        </GridItem>

        {/* Column 3 - Email and Social Icons */}
       {/* Column 3 - Email and Social Icons */}
<GridItem colSpan={1}>
  <Flex direction="column">
   <strong> <Text>Email address:</Text> </strong>
   <Text>info@bstgroup.world</Text> 
    <Flex mt={2}>
      {/* <Icon as={EmailIcon} boxSize={5} mr={2} /> */}
      <Box ml={2}> {/* Add margin to this box */}
        <FaTwitter size={20} color="white" />
      </Box>
      <Box ml={2}> {/* Add margin to this box */}
        <FaFacebook size={20} color="white" />
      </Box>
      <Box ml={2}> {/* Add margin to this box */}
        <FaInstagram size={20} color="white" />
      </Box>
      <Box ml={2}> {/* Add margin to this box */}
        <FaLinkedin size={20} color="white" />
      </Box>
      <Box ml={2}> {/* Add margin to this box */}
        <FaGithub size={20} color="white" />
      </Box>
    </Flex>
  </Flex>
</GridItem>

      </Grid>
    </Box>
  );
};

export default Footer1;
