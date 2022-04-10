import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, ScrollView } from "native-base"

const GuidelineCard = ({ guideline, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} >
      
      <ScrollView borderRadius="10px" w="160px" h="160px"  marginTop="18px" ml="15px" pl="20px" pr="20px" showsVerticalScrollIndicator={false} _light={{bgColor: "#fff", shadow: "4px"}}  _dark={{bg: "#313131"}}>
        
        <Text fontSize={16} color="#9284B9" mt="16px" _dark={{color: "#9284B9"}}>{guideline.title}</Text>
        <Text fontSize={12} color="#70552E" mt="4px" _dark={{color: "#FFFCF4"}}>{guideline.description}</Text>
        
      </ScrollView>   
    </Box>
  )};

export default GuidelineCard;