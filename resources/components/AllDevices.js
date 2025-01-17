import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";

  import { ScrollView } from "react-native";

  const AllDevices = ({data}) => {
    const [userId, setUserId] = useState("");
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const navigate = (screenName) => {
      navigation.navigate(screenName);
    };
    useEffect(() => {
      
    }, []);
  
    return (
      <View style={{
          flex:1
      }}>
    
        
          {data.map((item, key) => (
            <View key={key} style={{
              width:"95%",
              alignSelf:"center",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}>
             
                
                  <Image
                    source={{
                      uri: item.picture,
                    }}
                    style={{
                      width: 100,
                      height: 100,
                       borderRadius:100,
                      // backgroundColor:'white',
                      resizeMode: "cover",
                      position: "relative",
                      top: 40,
                      zIndex: 1400,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      height: 100,
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#D0EAF6",
                      padding: 5,
                      marginTop: 'relative',
                      borderRadius: 10,
                    }}
                  >
                    <Text>{item.device_name}</Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {item.model}
                    </Text>
                   
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        ${item.price}
                      </Text>
                      
                    </Text>
                  </View>
                  <View
                    style={{
                      top: -40,
                    }}
                  >
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Status::
                      </Text>
                      {item.status}
                    </Text>
                  </View>
                  <TouchableOpacity
                      style={{
                        backgroundColor: "#0d75bf",
                        width: "96%",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 40,
                        borderBottomRightRadius: 15,
                        position: "relative",
                        marginTop: 5,
                        top: -37,
                      }}
                      onPress={() =>
                        navigation.navigate("Auction", {
                          id: item.id,
                          device: item,
                        })
                      }
                    >
                      <Text
                        style={{
                          color: "white",
                        }}
                      >
                        Bid Now
                      </Text>
                    </TouchableOpacity>
             
            </View>
          ))}
      </View>
    );
  };
  
  export default AllDevices
  
  const styles = StyleSheet.create({});