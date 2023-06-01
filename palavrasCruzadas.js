// ABRIR E FECHAR DICA DAS RESPECTIVAS PERGUNTAS

var usuario = []

function entrar() {

    var nome = input_nome.value;

    if (nome == '') {
        div_exibir.innerHTML = `Digite o seu nome para prosseguir`
    } else {
        usuario.push(nome);
        div_exibir.innerHTML = ``;
        sessionStorage.NOME = usuario[0];
        window.location.href = "palavrasCruzadas.html";
    }

}

function carregarUsuario() {
    var usuario_nome = sessionStorage.NOME;
    usuario_atual.innerHTML = usuario_nome;
}

function BtnQuest1() {
    if (dica_1.style.display === "none") {
        dica_1.style.display = "block";
    } else {
        dica_1.style.display = "none";
    }
} function BtnQuest2() {
    if (dica_2.style.display === "none") {
        dica_2.style.display = "block";
    } else {
        dica_2.style.display = "none";
    }
} function BtnQuest3() {
    if (dica_3.style.display === "none") {
        dica_3.style.display = "block";
    } else {
        dica_3.style.display = "none";
    }
} function BtnQuest4() {
    if (dica_4.style.display === "none") {
        dica_4.style.display = "block";
    } else {
        dica_4.style.display = "none";
    }
} function BtnQuest5() {
    if (dica_5.style.display === "none") {
        dica_5.style.display = "block";
    } else {
        dica_5.style.display = "none";
    }
} function BtnQuest6() {
    if (dica_6.style.display === "none") {
        dica_6.style.display = "block";
    } else {
        dica_6.style.display = "none";
    }
} function BtnQuest7() {
    if (dica_7.style.display === "none") {
        dica_7.style.display = "block";
    } else {
        dica_7.style.display = "none";
    }
} function BtnQuest8() {
    if (dica_8.style.display === "none") {
        dica_8.style.display = "block";
    } else {
        dica_8.style.display = "none";
    }
} function BtnQuest9() {
    if (dica_9.style.display === "none") {
        dica_9.style.display = "block";
    } else {
        dica_9.style.display = "none";
    }
} function BtnQuest10() {
    if (dica_10.style.display === "none") {
        dica_10.style.display = "block";
    } else {
        dica_10.style.display = "none";
    }
} function BtnQuest11() {
    if (dica_11.style.display === "none") {
        dica_11.style.display = "block";
    } else {
        dica_11.style.display = "none";
    }
} function BtnQuest12() {
    if (dica_12.style.display === "none") {
        dica_12.style.display = "block";
    } else {
        dica_12.style.display = "none";
    }
} function BtnQuest13() {
    if (dica_13.style.display === "none") {
        dica_13.style.display = "block";
    } else {
        dica_13.style.display = "none";
    }
} function BtnQuest14() {
    if (dica_14.style.display === "none") {
        dica_14.style.display = "block";
    } else {
        dica_14.style.display = "none";
    }
} function BtnQuest15() {
    if (dica_15.style.display === "none") {
        dica_15.style.display = "block";
    } else {
        dica_15.style.display = "none";
    }
} function BtnQuest16() {
    if (dica_16.style.display === "none") {
        dica_16.style.display = "block";
    } else {
        dica_16.style.display = "none";
    }
}


// VER RESPOSTA
function resposta() {

    if (ConsultaResposta.value == 1) {
        alert('Resposta: CPU')
    }

    if (ConsultaResposta.value == 2) {
        alert('Resposta: ULA')
    }

    if (ConsultaResposta.value == 3) {
        alert('Resposta: REGISTRADORES')
    }

    if (ConsultaResposta.value == 4) {
        alert('Resposta: RAM')
    }

    if (ConsultaResposta.value == 5) {
        alert('Resposta: EPROM')
    }

    if (ConsultaResposta.value == 6) {
        alert('Resposta: ROM')
    }

    if (ConsultaResposta.value == 7) {
        alert('Resposta: FLASH')
    }

    if (ConsultaResposta.value == 8) {
        alert('Resposta: MEMORIA DE MASSA')
    }

    if (ConsultaResposta.value == 9) {
        alert('Resposta: DMA')
    }

    if (ConsultaResposta.value == 10) {
        alert('Resposta: CS')
    }

    if (ConsultaResposta.value == 11) {
        alert('Resposta: ADDRESS BUS')
    }

    if (ConsultaResposta.value == 12) {
        alert('Resposta: DATA BUS')
    }

    if (ConsultaResposta.value == 13) {
        alert('Resposta: i5')
    }

    if (ConsultaResposta.value == 14) {
        alert('Resposta: i7')
    }

    if (ConsultaResposta.value == 15) {
        alert('Resposta: QUAD CORE')
    }

    if (ConsultaResposta.value == 16) {
        alert('Resposta: DUAL CORE')
    }
}

// VALIDAR RESPOSTA

function verificar() {
    if (ConsultaVerificar.value == 1) {
        if (in_palavra_1_1.value == "c" && in_palavra_1_2.value == "p" && in_palavra_1_3.value == "u") {
            in_palavra_1_1.style.color = "#70cb00";
            in_palavra_1_2.style.color = "#70cb00";
            in_palavra_1_3.style.color = "#70cb00";
        } else {
            in_palavra_1_1.style.color = "red";
            in_palavra_1_2.style.color = "red";
            in_palavra_1_3.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 2) {
        if (in_palavra_2_1.value == "u" && in_palavra_2_2.value == "l" && in_palavra_2_3.value == "a") {
            in_palavra_2_1.style.color = "#70cb00";
            in_palavra_2_2.style.color = "#70cb00";
            in_palavra_2_3.style.color = "#70cb00";
        } else {
            in_palavra_2_1.style.color = "red";
            in_palavra_2_2.style.color = "red";
            in_palavra_2_3.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 3) {
        if (in_palavra_3_1.value == "r" && in_palavra_3_2.value == "e" && in_palavra_3_3.value == "g" && in_palavra_3_4.value == "i" && in_palavra_3_5.value == "s" && in_palavra_3_6.value == "t" && in_palavra_3_7.value == "r" && in_palavra_3_8.value == "a" && in_palavra_3_9.value == "d" && in_palavra_3_10.value == "o" && in_palavra_3_11.value == "r" && in_palavra_3_12.value == "e" && in_palavra_3_13.value == "s") {
            in_palavra_3_1.style.color = "#70cb00";
            in_palavra_3_2.style.color = "#70cb00";
            in_palavra_3_3.style.color = "#70cb00";
            in_palavra_3_4.style.color = "#70cb00";
            in_palavra_3_5.style.color = "#70cb00";
            in_palavra_3_6.style.color = "#70cb00";
            in_palavra_3_7.style.color = "#70cb00";
            in_palavra_3_8.style.color = "#70cb00";
            in_palavra_3_9.style.color = "#70cb00";
            in_palavra_3_10.style.color = "#70cb00";
            in_palavra_3_11.style.color = "#70cb00";
            in_palavra_3_12.style.color = "#70cb00";
            in_palavra_3_13.style.color = "#70cb00";
        } else {
            in_palavra_3_1.style.color = "red";
            in_palavra_3_2.style.color = "red";
            in_palavra_3_3.style.color = "red";
            in_palavra_3_4.style.color = "red";
            in_palavra_3_5.style.color = "red";
            in_palavra_3_6.style.color = "red";
            in_palavra_3_7.style.color = "red";
            in_palavra_3_8.style.color = "red";
            in_palavra_3_9.style.color = "red";
            in_palavra_3_10.style.color = "red";
            in_palavra_3_11.style.color = "red";
            in_palavra_3_12.style.color = "red";
            in_palavra_3_13.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 4) {
        if (in_palavra_3_1.value == "r" && in_palavra_4_2.value == "a" && in_palavra_4_3.value == "m") {
            in_palavra_3_1.style.color = "#70cb00";
            in_palavra_4_2.style.color = "#70cb00";
            in_palavra_4_3.style.color = "#70cb00";
        } else {
            in_palavra_3_1.style.color = "red";
            in_palavra_4_2.style.color = "red";
            in_palavra_4_3.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 5) {
        if (in_palavra_3_12.value == "e" && in_palavra_5_2.value == "p" && in_palavra_5_3.value == "r" && in_palavra_5_4.value == "o" && in_palavra_5_5.value == "m") {
            in_palavra_3_12.style.color = "#70cb00";
            in_palavra_5_2.style.color = "#70cb00";
            in_palavra_5_3.style.color = "#70cb00";
            in_palavra_5_4.style.color = "#70cb00";
            in_palavra_5_5.style.color = "#70cb00";
        } else {
            in_palavra_3_12.style.color = "red";
            in_palavra_5_2.style.color = "red";
            in_palavra_5_3.style.color = "red";
            in_palavra_5_4.style.color = "red";
            in_palavra_5_5.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 6) {
        if (in_palavra_6_1.value == "r" && in_palavra_6_2.value == "o" && in_palavra_6_3.value == "m") {
            in_palavra_6_1.style.color = "#70cb00";
            in_palavra_6_2.style.color = "#70cb00";
            in_palavra_6_3.style.color = "#70cb00";
        } else {
            in_palavra_6_1.style.color = "red";
            in_palavra_6_2.style.color = "red";
            in_palavra_6_3.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 7) {
        if (in_palavra_7_1.value == "f" && in_palavra_7_2.value == "l" && in_palavra_7_3.value == "a" && in_palavra_7_4.value == "s" && in_palavra_7_5.value == "h") {
            in_palavra_7_1.style.color = "#70cb00";
            in_palavra_7_2.style.color = "#70cb00";
            in_palavra_7_3.style.color = "#70cb00";
            in_palavra_7_4.style.color = "#70cb00";
            in_palavra_7_5.style.color = "#70cb00";
        } else {
            in_palavra_7_1.style.color = "red";
            in_palavra_7_2.style.color = "red";
            in_palavra_7_3.style.color = "red";
            in_palavra_7_4.style.color = "red";
            in_palavra_7_5.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 8) {
        if (in_palavra_8_1.value == "m" && in_palavra_8_2.value == "e" && in_palavra_8_3.value == "m" && in_palavra_8_4.value == "o" && in_palavra_8_5.value == "r" && in_palavra_8_6.value == "i" && in_palavra_8_7.value == "a" && in_palavra_8_8.value == "d" && in_palavra_8_9.value == "e" && in_palavra_8_10.value == "m" && in_palavra_8_11.value == "a" && in_palavra_8_12.value == "s" && in_palavra_8_13.value == "s" && in_palavra_8_14.value == "a") {
            in_palavra_8_1.style.color = "#70cb00";
            in_palavra_8_2.style.color = "#70cb00";
            in_palavra_8_3.style.color = "#70cb00";
            in_palavra_8_4.style.color = "#70cb00";
            in_palavra_8_5.style.color = "#70cb00";
            in_palavra_8_6.style.color = "#70cb00";
            in_palavra_8_7.style.color = "#70cb00";
            in_palavra_8_8.style.color = "#70cb00";
            in_palavra_8_9.style.color = "#70cb00";
            in_palavra_8_10.style.color = "#70cb00";
            in_palavra_8_11.style.color = "#70cb00";
            in_palavra_8_12.style.color = "#70cb00";
            in_palavra_8_13.style.color = "#70cb00";
            in_palavra_8_14.style.color = "#70cb00";
        } else {
            in_palavra_8_1.style.color = "red";
            in_palavra_8_2.style.color = "red";
            in_palavra_8_3.style.color = "red";
            in_palavra_8_4.style.color = "red";
            in_palavra_8_5.style.color = "red";
            in_palavra_8_6.style.color = "red";
            in_palavra_8_7.style.color = "red";
            in_palavra_8_8.style.color = "red";
            in_palavra_8_9.style.color = "red";
            in_palavra_8_10.style.color = "red";
            in_palavra_8_11.style.color = "red";
            in_palavra_8_12.style.color = "red";
            in_palavra_8_13.style.color = "red";
            in_palavra_8_14.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 9) {
        if (in_palavra_15_4.value == "d" && in_palavra_9_2.value == "m" && in_palavra_7_3.value == "a") {
            in_palavra_15_4.style.color = "#70cb00";
            in_palavra_9_2.style.color = "#70cb00";
            in_palavra_7_3.style.color = "#70cb00";
        } else {
            in_palavra_15_4.style.color = "red";
            in_palavra_9_2.style.color = "red";
            in_palavra_7_3.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 10) {
        if (in_palavra_1_1.value == "c" && in_palavra_10_2.value == "s") {
            in_palavra_1_1.style.color = "#70cb00";
            in_palavra_10_2.style.color = "#70cb00";
        } else {
            in_palavra_1_1.style.color = "red";
            in_palavra_10_2.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 11) {
        if (in_palavra_8_14.value == "a" && in_palavra_11_2.value == "d" && in_palavra_6_1.value == "d" && in_palavra_11_4.value == "r" && in_palavra_11_5.value == "e" && in_palavra_3_5.value == "s" && in_palavra_11_7.value == "s" && in_palavra_11_8.value == "b" && in_palavra_11_9.value == "u" && in_palavra_11_10.value == "s") {
            in_palavra_8_14.style.color = "#70cb00";
            in_palavra_11_2.style.color = "#70cb00";
            in_palavra_6_1.style.color = "#70cb00";
            in_palavra_11_4.style.color = "#70cb00";
            in_palavra_11_5.style.color = "#70cb00";
            in_palavra_3_5.style.color = "#70cb00";
            in_palavra_11_7.style.color = "#70cb00";
            in_palavra_11_8.style.color = "#70cb00";
            in_palavra_11_9.style.color = "#70cb00";
            in_palavra_11_10.style.color = "#70cb00";
        } else {
            in_palavra_8_14.style.color = "red";
            in_palavra_11_2.style.color = "red";
            in_palavra_6_1.style.color = "red";
            in_palavra_11_4.style.color = "red";
            in_palavra_11_5.style.color = "red";
            in_palavra_3_5.style.color = "red";
            in_palavra_11_7.style.color = "red";
            in_palavra_11_8.style.color = "red";
            in_palavra_11_9.style.color = "red";
            in_palavra_11_10.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 12) {
        if (in_palavra_3_9.value == "d" && in_palavra_12_2.value == "a" && in_palavra_12_3.value == "t" && in_palavra_12_4.value == "a" && in_palavra_12_5.value == "b" && in_palavra_1_3.value == "u" && in_palavra_12_7.value == "s") {
            in_palavra_3_9.style.color = "#70cb00";
            in_palavra_12_2.style.color = "#70cb00";
            in_palavra_12_3.style.color = "#70cb00";
            in_palavra_12_4.style.color = "#70cb00";
            in_palavra_12_5.style.color = "#70cb00";
            in_palavra_1_3.style.color = "#70cb00";
            in_palavra_12_7.style.color = "#70cb00";
        } else {
            in_palavra_3_9.style.color = "red";
            in_palavra_12_2.style.color = "red";
            in_palavra_12_3.style.color = "red";
            in_palavra_12_4.style.color = "red";
            in_palavra_12_5.style.color = "red";
            in_palavra_1_3.style.color = "red";
            in_palavra_12_7.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 13) {
        if (in_palavra_8_6.value == "i" && in_palavra_13_2.value == "5") {
            in_palavra_8_6.style.color = "#70cb00";
            in_palavra_13_2.style.color = "#70cb00";
        } else {
            in_palavra_8_6.style.color = "red";
            in_palavra_13_2.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 14) {
        if (in_palavra_3_4.value == "i" && in_palavra_14_2.value == "7") {
            in_palavra_3_4.style.color = "#70cb00";
            in_palavra_14_2.style.color = "#70cb00";
        } else {
            in_palavra_3_4.style.color = "red";
            in_palavra_14_2.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 15) {
        if (in_palavra_15_1.value == "q" && in_palavra_15_2.value == "u" && in_palavra_15_3.value == "a" && in_palavra_15_4.value == "d" && in_palavra_15_5.value == "c" && in_palavra_15_6.value == "o" && in_palavra_15_7.value == "r" && in_palavra_15_8.value == "e") {
            in_palavra_15_1.style.color = "#70cb00";
            in_palavra_15_2.style.color = "#70cb00";
            in_palavra_15_3.style.color = "#70cb00";
            in_palavra_15_4.style.color = "#70cb00";
            in_palavra_15_5.style.color = "#70cb00";
            in_palavra_15_6.style.color = "#70cb00";
            in_palavra_15_7.style.color = "#70cb00";
            in_palavra_15_8.style.color = "#70cb00";
        } else {
            in_palavra_15_1.style.color = "red";
            in_palavra_15_2.style.color = "red";
            in_palavra_15_3.style.color = "red";
            in_palavra_15_4.style.color = "red";
            in_palavra_15_5.style.color = "red";
            in_palavra_15_6.style.color = "red";
            in_palavra_15_7.style.color = "red";
            in_palavra_15_8.style.color = "red";
        }
    }

    if (ConsultaVerificar.value == 16) {
        if (in_palavra_8_8.value == "d" && in_palavra_16_2.value == "u" && in_palavra_16_3.value == "a" && in_palavra_2_2.value == "l" && in_palavra_16_5.value == "c" && in_palavra_16_6.value == "o" && in_palavra_16_7.value == "r" && in_palavra_15_8.value == "e") {
            in_palavra_8_8.style.color = "#70cb00";
            in_palavra_16_2.style.color = "#70cb00";
            in_palavra_16_3.style.color = "#70cb00";
            in_palavra_2_2.style.color = "#70cb00";
            in_palavra_16_5.style.color = "#70cb00";
            in_palavra_16_6.style.color = "#70cb00";
            in_palavra_16_7.style.color = "#70cb00";
            in_palavra_15_8.style.color = "#70cb00";
        } else {
            in_palavra_8_8.style.color = "red";
            in_palavra_16_2.style.color = "red";
            in_palavra_16_3.style.color = "red";
            in_palavra_2_2.style.color = "red";
            in_palavra_16_5.style.color = "red";
            in_palavra_16_6.style.color = "red";
            in_palavra_16_7.style.color = "red";
            in_palavra_15_8.style.color = "red";
        }
    }
}