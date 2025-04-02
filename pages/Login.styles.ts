// screens/Login.styles.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0FA297", // Fundo consistente para evitar flash branco
  },
  /* Estilos da Splash */
  splashContainer: {
    flex: 1,
    backgroundColor: "#0FA297",
    alignItems: "center",
    justifyContent: "center",
  },
  splashLogo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  splashTitle: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  splashFooter: {
    position: "absolute",
    bottom: 20,
    color: "#FFFFFF",
  },
  /* Estilos da Tela de Login */
  loginContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#333",
  },
  loginButton: {
    width: "100%",
    height: 45,
    backgroundColor: "#0C8E83",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 8,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  socialLogo: {
    width: "100%",
    height: "100%",
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 50,
  },
  linkText: {
    color: "#FFFFFF",
    textDecorationLine: "none",
  },
});
