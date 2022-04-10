import React from "react";
import { ImageBackground, Image } from "react-native-web";
import { Box, Text, ScrollView } from "native-base";
import DocumentList from "../components/DocumentList";
import DocumentData from "../json/documents.json"

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView >
    <Box backgroundColor="#FFF9EB"> 
      {/* <Header /> */}
    
      <Text fontSize={24} fontWeight="700" ml="20px" mt="8px" color="#70552E" >記錄</Text>
      <DocumentList 
        list={DocumentData.document}
        navigation={navigation}
        mt="16px"
      />
      {/* <Text fontSize={24} fontWeight="500" ml="20px" mt="16px">Newest Book</Text>
      <NewestBookList 
        list={albumData.newestBook}
        navigation={navigation}
        mt="16px"
      /> */}
    </Box>
    </ScrollView>
  );
};

export default HomeScreen;