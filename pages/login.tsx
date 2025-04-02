// screens/Login.tsx
import React, { useRef, useEffect, useState } from "react";
import {
  Animated,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Easing,
} from "react-native";

import styles from "./Login.styles"; // Importando os estilos

// Importando as imagens (ajuste os caminhos conforme sua estrutura)
const walletLogo = require("../assets/logo/wallet.png");
const facebookLogo = require("../assets/logo/facebook.png");
const googleLogo = require("../assets/logo/google.png");

export default function Login() {
  // Estado para controlar a exibição da splash
  const [splashDone, setSplashDone] = useState(false);

  // Valores para animação da splash (entrada apenas)
  const splashFadeAnim = useRef(new Animated.Value(0)).current;
  const splashScaleAnim = useRef(new Animated.Value(0.8)).current;

  // Valores para animação do conteúdo de login
  const loginLogoTranslateY = useRef(new Animated.Value(0)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 1. Animação de entrada da splash: fade in e scale in
    Animated.parallel([
      Animated.timing(splashFadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(splashScaleAnim, {
        toValue: 1,
        friction: 1,
        tension: 5,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Mantém a splash visível por 2 segundos e depois remove-a sem fade out
      setTimeout(() => {
        setSplashDone(true);
        // 2. Inicia a animação da tela de login: a logo se move suavemente para cima
        // e, em seguida, o restante do conteúdo aparece com fade-in.
        Animated.sequence([
          Animated.spring(loginLogoTranslateY, {
            toValue: -50, // Menor deslocamento para uma transição mais suave
            friction: 6, // Aumenta a suavidade
            tension: 30, // Reduz a agressividade da animação
            useNativeDriver: true,
          }),
          Animated.timing(contentOpacity, {
            toValue: 1,
            duration: 100,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]).start();
      }, 1000);
    });
  }, [splashFadeAnim, splashScaleAnim, loginLogoTranslateY, contentOpacity]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Splash Screen (exibida enquanto splashDone for false) */}
      {!splashDone && (
        <Animated.View
          style={[styles.splashContainer, { opacity: splashFadeAnim }]}
        >
          <Animated.Image
            source={walletLogo}
            style={[
              styles.splashLogo,
              { transform: [{ scale: splashScaleAnim }] },
            ]}
          />
          <Text style={styles.splashTitle}>
            <Text style={{ fontWeight: "bold" }}>Wallet</Text> Trader
          </Text>
          <Text style={styles.splashFooter}>
            Created with ❤️ by Vinicius and Jessica
          </Text>
        </Animated.View>
      )}

      {/* Tela de Login (apresentada após a splash) */}
      {splashDone && (
        <View style={styles.loginContainer}>
          <Animated.View
            style={{
              transform: [{ translateY: loginLogoTranslateY }],
              alignItems: "center",
            }}
          >
            <Image source={walletLogo} style={styles.logo} />
            <Text style={styles.title}>Wallet Trader</Text>
          </Animated.View>

          <Animated.View style={[styles.content, { opacity: contentOpacity }]}>
            <TextInput
              style={styles.input}
              placeholder="Insira seu e-mail"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Insira sua senha"
              placeholderTextColor="#999"
              secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
              <Text style={styles.loginButtonText}>Fazer Login</Text>
            </TouchableOpacity>

            {/* Links “Cadastre-se” e “Esqueci minha senha” */}
            <View style={styles.linksContainer}>
              <TouchableOpacity
                onPress={() => {
                  /* lógica de cadastro */
                }}
              >
                <Text style={styles.linkText}>Cadastre-se</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  /* lógica de recuperação */
                }}
              >
                <Text style={styles.linkText}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>

            {/* Botões de login social */}
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
                <Image
                  source={facebookLogo}
                  style={styles.socialLogo}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
                <Image
                  source={googleLogo}
                  style={styles.socialLogo}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
