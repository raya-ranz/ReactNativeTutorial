import React, { useContext } from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Platform,
  Text,
} from "react-native";
import Typography from "./Typography";
import { Avatar, Icon } from "react-native-elements";

const isIOS = Platform.OS === "ios";
function Header({
  title,
  color,
  navigation,
  onBack,
  settings,
  qr,
  customRight,
  backCaption,
  leftOpt,
  chat,
  payload,
  status,
  isDash,
  itemColor,
}) {
  const headerRightItems = (Icon, routeName, type = "left") => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={
          type === "left"
            ? styles.headerLeftItems.touch
            : styles.headerRightItems.touch
        }
      >
        <Image
          source={Icon}
          style={
            type === "left"
              ? styles.headerLeftItems.image
              : styles.headerRightItems.image
          }
        />
      </TouchableOpacity>
    );
  };

  const renderMain = () => {
    return <View>{toDash()}</View>;
  };

  const renderStatus = (status) => {
    if (status == "online") {
      return (
        <Text
          style={{
            color: "#fff",
            fontSize: 11,

            marginLeft: 10,
          }}
        >
          Online
        </Text>
      );
    } else if (status == "typing") {
      return (
        <Text
          style={{
            color: "#fff",
            fontSize: 11,

            marginLeft: 10,
          }}
        >
          Typing...
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            color: "#fff",
            fontSize: 11,

            marginLeft: 10,
          }}
        >
          {"last seen: " + status}
        </Text>
      );
    }
  };

  const toDash = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
        style={{ flexDirection: "row", marginLeft: 5, marginTop: -5 }}
      >
        {isDash ? null : (
          <Typography
            variant="h3"
            style={{
              color: "#fff",
              marginTop: isIOS ? 6 : 5,
              marginRight: isIOS ? 0 : -5,
              marginLeft: isIOS ? 5 : 0,
              fontWeight: "normal",
              fontSize: 16,
            }}
          >
            Back
          </Typography>
        )}
      </TouchableOpacity>
    );
  };

  const forChat = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginLeft: 10,
          marginBottom: 6,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View style={{ alignSelf: "flex-start", flexDirection: "row" }}>
          <TouchableOpacity style={{ marginTop: 3 }}>
            <Icon name="arrow-left" type="material-community" color="#fff" />
          </TouchableOpacity>
          <Avatar
            rounded
            source={{
              uri: payload.profilePhoto,
            }}
            containerStyle={{ marginLeft: 10 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 17,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              {payload.username}
            </Text>
            {renderStatus(status)}
          </View>
        </View>

        <View
          style={{
            alignSelf: "flex-end",
            flexDirection: "row",
            marginRight: 10,
          }}
        >
          <TouchableOpacity style={{ marginBottom: 5, marginRight: 12 }}>
            <Icon name="videocam" type="material" color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: 5, marginRight: 8 }}>
            <Icon name="phone" type="material-community" color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: 5 }}>
            <Icon name="dots-vertical" type="material-community" color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const normalHeader = () => {
    return <View style={{ flexDirection: "row", flex: 1 }}></View>;
  };

  const forNormal = () => {
    return (
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", paddingLeft: 5 }}>
          {typeof onBack === "function" ? (
            backCaption ? (
              <TouchableOpacity onPress={onBack} style={styles.backWrapper}>
                <Icon
                  name="chevron-left"
                  type="material-community"
                  color="#fff"
                  size={30}
                />
                <Typography
                  variant="h2"
                  style={{
                    color: "#fff",
                    marginTop: isIOS ? 6 : 4,
                    fontWeight: "normal",
                    paddingBottom: isIOS ? 4 : 0,
                  }}
                >
                  {backCaption || "Back"}
                </Typography>
              </TouchableOpacity>
            ) : null
          ) : (
            renderMain()
          )}
        </View>

        <View style={{ flexGrow: 1 }}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              paddingBottom: 12,
            }}
          >
            {title}
          </Text>
        </View>

        <View
          style={{
            alignContent: "flex-end",
            flexDirection: "row-reverse",
            flex: 1,
          }}
        >
          {settings && headerRightItems(Grayed.Settings, "Settings", "right")}
          {qr && headerRightItems(Grayed.MCheckin, "OngoingEvents", "right")}
          {customRight}
        </View>
      </View>
    );
  };

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#333" />
      <SafeAreaView
        style={
          itemColor
            ? {
                backgroundColor: itemColor,
                marginTop: -10,
                padding: 0,
                marginBottom: 5,
              }
            : styles.header
        }
      >
        <View
          style={
            itemColor
              ? {
                  backgroundColor: itemColor,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 15,
                  paddingBottom: 5,
                }
              : styles.wrapper
          }
        >
          {chat ? forChat() : forNormal()}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = {
  headerRightItems: {
    touch: {
      marginRight: 5,
      marginBottom: 10,
    },
    image: {
      height: 25,
      width: 25,
    },
  },
  headerLeftItems: {
    touch: {
      marginLeft: 5,
      marginBottom: 10,
    },
    image: {
      // height: 25,
      width: 25,
      resizeMode: "center",
    },
  },
  wrapper: {
    backgroundColor: "#003C58",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 5,
  },
  header: {
    backgroundColor: "#003C58",
    marginTop: -10,
    padding: 0,
    marginBottom: 5,
  },
  backWrapper: {
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginTop: -10,
  },
  hamburger: {
    left: 0,
    alignSelf: "center",
  },
  title: {
    fontSize: 17,
    paddingBottom: 5,
  },
  bar: {
    height: 2,
    backgroundColor: "#A5A8A8",
    width: 25,
    marginBottom: 5,
  },
};

export default Header;
