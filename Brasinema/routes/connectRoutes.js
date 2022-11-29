// Requerindo oq vai ser usado
const express = require('express');
const router = express.Router();

// Requerindo módulos de outros .js
const database = require('../models/db');  //banco de dados
const { get } = require('../server'); 


//rota pra redirecionar pra home
router.get('/', (req,res) => {
    res.redirect('/home');
});

// Rotas com SQL

router.get("/compra-efetuada", function(req,res){
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    res.render('success', { 
        filialEscolhida: filial
    });
})

router.get("/programacao", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {                  // if pra ver qual filial está selecionada
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme`, function(erro,resultadoFilme){  // selecionando dados da table filme
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao`, function(erro,resultadoSessao){  // selecionando dados da table sessão
            if(erro){
                throw erro;
            }
            res.render('indexProgramacao', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/em-cartaz", function(req,res) { 
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        res.render('indexEmCartaz', { 
            listaFilme: resultadoFilme,
            filialEscolhida: filial
        }); 
    });
});

router.get("/home", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme LIMIT 4`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        res.render('indexPrincipal', { 
            listaFilme: resultadoFilme,
            filialEscolhida: filial
        }); 
    });
});

router.get("/homem-aranha", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="2"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="2" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexFilme', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/the-batman", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="3"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="3" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexFilme', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/doutor-estranho", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="4"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="4" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexFilme', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/jujutsu-kaisen", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="5"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="5" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexFilme', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/a-medium", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="6"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="6" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexFilme', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/sonic", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="7"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="7" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexFilme', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/ingresso/The%20Batman", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="3"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', mes, horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="3" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/ingresso/Homem-Aranha:%20Sem%20Volta%20para%20Casa", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="2"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', DATE_FORMAT(mes, "%Y-%m-%d") as 'dataInsert', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="2" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/ingresso/Doutor%20Estranho%20no%20Multiverso%20da%20Loucura", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="4"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', DATE_FORMAT(mes, "%Y-%m-%d") as 'dataInsert', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="4" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/ingresso/Jujutsu%20Kaisen%200:%20O%20Filme", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="5"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', DATE_FORMAT(mes, "%Y-%m-%d") as 'dataInsert', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="5" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/ingresso/A%20Medium", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="6"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', DATE_FORMAT(mes, "%Y-%m-%d") as 'dataInsert', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="6" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/ingresso/Sonic%202%20-%20O%20Filme", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="7"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT sessaoId, filmeId, assentos, DATE_FORMAT(mes, "%d-%m") as 'data', DATE_FORMAT(mes, "%Y-%m-%d") as 'dataInsert', horario, numeroSala, tipoFilme, idFilial
        FROM dbCinema.sessao WHERE filmeId="7" AND idFilial="`+filialN+`";`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/admin", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    res.render('indexLogin', {
        filialEscolhida: filial,
    });
});



//rota para trocar filial
router.post('/pr', function(req,res){
    localStorage.setItem('filialAlter', '1');
    res.redirect('back');
})

router.post('/sp', function(req,res){
    localStorage.setItem('filialAlter', '2');
    res.redirect('back');
})

//rota para salvar os INSERT
router.post('/add1', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email, req.body.data, req.body.idFilial], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
        res.redirect('/compra-efetuada');
    });
});

router.post('/add2', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email, req.body.data, req.body.idFilial], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId2, req.body.nome2, req.body.cpf2, req.body.email2, req.body.data2, req.body.idFilial2], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
        res.redirect('/compra-efetuada');
    });
});

router.post('/add3', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email, req.body.data, req.body.idFilial], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId2, req.body.nome2, req.body.cpf2, req.body.email2, req.body.data2, req.body.idFilial2], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId3, req.body.nome3, req.body.cpf3, req.body.email3, req.body.data3, req.body.idFilial3], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    res.redirect('/compra-efetuada');
});

router.post('/add4', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email, req.body.data, req.body.idFilial], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId2, req.body.nome2, req.body.cpf2, req.body.email2, req.body.data2, req.body.idFilial2], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId3, req.body.nome3, req.body.cpf3, req.body.email3, req.body.data3, req.body.idFilial3], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId4, req.body.nome4, req.body.cpf4, req.body.email4, req.body.data4, req.body.idFilial4], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    res.redirect('/compra-efetuada');
});

router.post('/add5', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email, req.body.data, req.body.idFilial], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId2, req.body.nome2, req.body.cpf2, req.body.email2, req.body.data2, req.body.idFilial2], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId3, req.body.nome3, req.body.cpf3, req.body.email3, req.body.data3, req.body.idFilial3], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId4, req.body.nome4, req.body.cpf4, req.body.email4, req.body.data4, req.body.idFilial4], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email, mes, idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.sessaoId5, req.body.nome5, req.body.cpf5, req.body.email5, req.body.data5, req.body.idFilial5], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    res.redirect('/compra-efetuada');
});

//rota para o login do admin
router.post("/admin-logged", function(req,res){
    try{
        const user = req.body.user;
        const password = req.body.password;

        if(user == "admin" && password == "12345"){
            var mesIngresso = localStorage.getItem('mesIngresso');
            if(mesIngresso == null){
                mesIngresso = 1
            }

            var mesFuncionario = localStorage.getItem('mesFuncionario');
            if(mesFuncionario == null){
                mesFuncionario = 1
            }

    db.query(`SELECT F.idFuncionario, F.nomeFuncionario, F.cpfFuncionario, F.cargoFuncionario , F.salarioFuncionario, DATE_FORMAT(F.mesContratacao, "%d-%m-%Y") as 'Contratado', DATE_FORMAT(F.mesContratacao, "%Y-%m-%d") as 'mesContratado', DATE_FORMAT(F.mesFimContrato, "%Y-%m-%d") as 'mesFimContrato', DATE_FORMAT(F.mesFimContrato, "%d-%m-%Y") as 'FimContrato', F.idFilial, F.contratoAtivo,
    CASE WHEN F.idFilial = 1 THEN "Paraná" WHEN F.idFilial = 2 THEN "São Paulo" END as 'Filial',
    CASE WHEN F.contratoAtivo = 1 THEN "Ativo" WHEN F.contratoAtivo = 2 THEN "Inativo" END as 'Contrato'
    FROM dbCinema.funcionarios as F ORDER BY salarioFuncionario;`, function(erro,funcionarios){
                if(erro){
                    throw erro;
                }
                db.query(`SELECT I.sessaoId, I.nome, I.cpf, I.email,  DATE_FORMAT(I.mes, "%d-%m-%Y") as 'Date', 
                CASE WHEN I.idFilial = 1 THEN "Paraná" WHEN I.idFilial = 2 THEN "São Paulo" END as 'Filial'
                FROM dbCinema.ingressos as I ORDER BY I.ingressoId; `, function(erro,ingressos){
                    if(erro){
                        throw erro;
                    }
                    db.query(`SELECT (SUM(f.salarioFuncionario)) as 'Total_Salarios_Funcionarios'
                    FROM funcionarios as F
                    WHERE MONTH(F.mesFimContrato) >= '`+mesFuncionario+`' AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`' AND F.mesFimcontrato is NOT NULL
                    OR F.mesFimContrato is NULL AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`';`, function(erro,salario){
                        if(erro){
                            throw erro;
                        }
                        db.query(`SELECT (COUNT(I.ingressoId) * 20) as 'Ganhos' 
                        FROM dbCinema.ingressos as I
                        WHERE MONTH(I.mes) = '`+mesIngresso+`'; `, function(erro,ingressoC){
                            if(erro){
                                throw erro;
                            }
                            res.render('indexAdmin', { 
                                listaFuncionarios: funcionarios,
                                listaIngressos: ingressos,
                                listaSalario: salario,
                                listaIngresso: ingressoC,
                                mesSelecionado: mesIngresso,
                                mesSelecionadoF: mesFuncionario
                            });
                        });  
                    });   
                });
            });
        }
        else{
        res.render('failLogin', {
            name: 'fail',
            filialEscolhida: filial
        })
        }
    }
    catch (error) {
        res.status(400).send("Invalid user")
    }
})

//rotas para controle do admin
router.post("/admin-loggedM", function(req,res){
    const cpfFunc = req.body.buttonDelete;

    db.query(`DELETE FROM dbCinema.funcionarios WHERE cpfFuncionario="`+cpfFunc+`"`)

    var mesFuncionario = localStorage.getItem('mesFuncionario');
    if(mesFuncionario == null){
        mesFuncionario = 1
    }

    var mesIngresso = localStorage.getItem('mesIngresso');
    if(mesIngresso == null){
        mesIngresso = 1
    }

    db.query(`SELECT F.idFuncionario, F.nomeFuncionario, F.cpfFuncionario, F.cargoFuncionario , F.salarioFuncionario, DATE_FORMAT(F.mesContratacao, "%d-%m-%Y") as 'Contratado', DATE_FORMAT(F.mesContratacao, "%Y-%m-%d") as 'mesContratado', DATE_FORMAT(F.mesFimContrato, "%Y-%m-%d") as 'mesFimContrato', DATE_FORMAT(F.mesFimContrato, "%d-%m-%Y") as 'FimContrato', F.idFilial, F.contratoAtivo,
    CASE WHEN F.idFilial = 1 THEN "Paraná" WHEN F.idFilial = 2 THEN "São Paulo" END as 'Filial',
    CASE WHEN F.contratoAtivo = 1 THEN "Ativo" WHEN F.contratoAtivo = 2 THEN "Inativo" END as 'Contrato'
    FROM dbCinema.funcionarios as F ORDER BY salarioFuncionario;`, function(erro,funcionarios){
                if(erro){
                    throw erro;
                }
                db.query(`SELECT I.sessaoId, I.nome, I.cpf, I.email,  DATE_FORMAT(I.mes, "%d-%m-%Y") as 'Date', 
                CASE WHEN I.idFilial = 1 THEN "Paraná" WHEN I.idFilial = 2 THEN "São Paulo" END as 'Filial'
                FROM dbCinema.ingressos as I ORDER BY I.ingressoId; `, function(erro,ingressos){
                    if(erro){
                        throw erro;
                    }
                    db.query(`SELECT (SUM(f.salarioFuncionario)) as 'Total_Salarios_Funcionarios'
                    FROM funcionarios as F
                    WHERE MONTH(F.mesFimContrato) >= '`+mesFuncionario+`' AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`' AND F.mesFimcontrato is NOT NULL
                    OR F.mesFimContrato is NULL AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`';`, function(erro,salario){
                        if(erro){
                            throw erro;
                        }
                        db.query(`SELECT (COUNT(I.ingressoId) * 20) as 'Ganhos' 
                        FROM dbCinema.ingressos as I
                        WHERE MONTH(I.mes) = '`+mesIngresso+`'; `, function(erro,ingressoC){
                            if(erro){
                                throw erro;
                            }
                            res.render('indexAdmin', { 
                                listaFuncionarios: funcionarios,
                                listaIngressos: ingressos,
                                listaSalario: salario,
                                listaIngresso: ingressoC,
                                mesSelecionado: mesIngresso,
                                mesSelecionadoF: mesFuncionario
                            });
                        });  
                    });   
                });
            });
})

router.post("/admin-loggedP", function(req,res){
    db.query(`INSERT INTO dbCinema.funcionarios(nomeFuncionario,cpfFuncionario,cargoFuncionario,salarioFuncionario,mesContratacao,idFilial,contratoAtivo) VALUES (?,?,?,?,?,?,?)`,
    [req.body.nomeFunc, req.body.cpfFunc, req.body.funcaoFunc, req.body.salarioFunc, req.body.dataFunc, req.body.filialFunc, req.body.contratoAtivo], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });

    var mesFuncionario = localStorage.getItem('mesFuncionario');
    if(mesFuncionario == null){
        mesFuncionario = 1
    }

    var mesIngresso = localStorage.getItem('mesIngresso');
    if(mesIngresso == null){
        mesIngresso = 1
    }

    db.query(`SELECT F.idFuncionario, F.nomeFuncionario, F.cpfFuncionario, F.cargoFuncionario , F.salarioFuncionario, DATE_FORMAT(F.mesContratacao, "%d-%m-%Y") as 'Contratado', DATE_FORMAT(F.mesContratacao, "%Y-%m-%d") as 'mesContratado', DATE_FORMAT(F.mesFimContrato, "%Y-%m-%d") as 'mesFimContrato', DATE_FORMAT(F.mesFimContrato, "%d-%m-%Y") as 'FimContrato', F.idFilial, F.contratoAtivo,
    CASE WHEN F.idFilial = 1 THEN "Paraná" WHEN F.idFilial = 2 THEN "São Paulo" END as 'Filial',
    CASE WHEN F.contratoAtivo = 1 THEN "Ativo" WHEN F.contratoAtivo = 2 THEN "Inativo" END as 'Contrato'
    FROM dbCinema.funcionarios as F ORDER BY salarioFuncionario;`, function(erro,funcionarios){
                if(erro){
                    throw erro;
                }
                db.query(`SELECT I.sessaoId, I.nome, I.cpf, I.email,  DATE_FORMAT(I.mes, "%d-%m-%Y") as 'Date', 
                CASE WHEN I.idFilial = 1 THEN "Paraná" WHEN I.idFilial = 2 THEN "São Paulo" END as 'Filial'
                FROM dbCinema.ingressos as I ORDER BY I.ingressoId; `, function(erro,ingressos){
                    if(erro){
                        throw erro;
                    }
                    db.query(`SELECT (SUM(f.salarioFuncionario)) as 'Total_Salarios_Funcionarios'
                    FROM funcionarios as F
                    WHERE MONTH(F.mesFimContrato) >= '`+mesFuncionario+`' AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`' AND F.mesFimcontrato is NOT NULL
                    OR F.mesFimContrato is NULL AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`';`, function(erro,salario){
                        if(erro){
                            throw erro;
                        }
                        db.query(`SELECT (COUNT(I.ingressoId) * 20) as 'Ganhos' 
                        FROM dbCinema.ingressos as I
                        WHERE MONTH(I.mes) = '`+mesIngresso+`'; `, function(erro,ingressoC){
                            if(erro){
                                throw erro;
                            }
                            res.render('indexAdmin', { 
                                listaFuncionarios: funcionarios,
                                listaIngressos: ingressos,
                                listaSalario: salario,
                                listaIngresso: ingressoC,
                                mesSelecionado: mesIngresso,
                                mesSelecionadoF: mesFuncionario
                            });
                        });  
                    });   
                });
            });
})

router.post("/admin-loggedE", function(req,res){
    var id = req.body.idFunc;
    var nome = req.body.nomeFunc;
    var cpf = req.body.cpfFunc;
    var funcao = req.body.funcaoFunc;
    var salario = req.body.salarioFunc;
    var mesContrato = req.body.dataFunc;
    var mesFimContrato = req.body.dataFuncDemissao;
    var filial = req.body.filialFunc; 
    var ativo = req.body.contratoAtivo;
    if(mesFimContrato == ""){
        db.query(`UPDATE dbCinema.funcionarios 
        SET nomeFuncionario = "`+nome+`", 
        cpfFuncionario = "`+cpf+`", 
        cargoFuncionario = "`+funcao+`", 
        salarioFuncionario = "`+salario+`",  
        mesContratacao = "`+mesContrato+`",
        mesFimContrato = null,
        idFilial = "`+filial+`",
        contratoAtivo = "`+ativo+`"
        WHERE idFuncionario = "`+id+`"`,function(erro){
            if(erro){
                res.status(200).send('Erro: ' + erro)
            }
        });
    }
    else{
        db.query(`UPDATE dbCinema.funcionarios 
        SET nomeFuncionario = "`+nome+`", 
        cpfFuncionario = "`+cpf+`", 
        cargoFuncionario = "`+funcao+`", 
        salarioFuncionario = "`+salario+`",  
        mesContratacao = "`+mesContrato+`",
        mesFimContrato = "`+mesFimContrato+`",
        idFilial = "`+filial+`",
        contratoAtivo = "`+ativo+`"
        WHERE idFuncionario = "`+id+`"`,function(erro){
            if(erro){
                res.status(200).send('Erro: ' + erro)
            }
        });
    }

    var mesFuncionario = localStorage.getItem('mesFuncionario');
    if(mesFuncionario == null){
        mesFuncionario = 1
    }

    var mesIngresso = localStorage.getItem('mesIngresso');
    if(mesIngresso == null){
        mesIngresso = 1
    }

    db.query(`SELECT F.idFuncionario, F.nomeFuncionario, F.cpfFuncionario, F.cargoFuncionario , F.salarioFuncionario, DATE_FORMAT(F.mesContratacao, "%d-%m-%Y") as 'Contratado', DATE_FORMAT(F.mesContratacao, "%Y-%m-%d") as 'mesContratado', DATE_FORMAT(F.mesFimContrato, "%Y-%m-%d") as 'mesFimContrato', DATE_FORMAT(F.mesFimContrato, "%d-%m-%Y") as 'FimContrato', F.idFilial, F.contratoAtivo,
    CASE WHEN F.idFilial = 1 THEN "Paraná" WHEN F.idFilial = 2 THEN "São Paulo" END as 'Filial',
    CASE WHEN F.contratoAtivo = 1 THEN "Ativo" WHEN F.contratoAtivo = 2 THEN "Inativo" END as 'Contrato'
    FROM dbCinema.funcionarios as F ORDER BY salarioFuncionario;`, function(erro,funcionarios){
                if(erro){
                    throw erro;
                }
                db.query(`SELECT I.sessaoId, I.nome, I.cpf, I.email,  DATE_FORMAT(I.mes, "%d-%m-%Y") as 'Date', 
                CASE WHEN I.idFilial = 1 THEN "Paraná" WHEN I.idFilial = 2 THEN "São Paulo" END as 'Filial'
                FROM dbCinema.ingressos as I ORDER BY I.ingressoId; `, function(erro,ingressos){
                    if(erro){
                        throw erro;
                    }
                    db.query(`SELECT (SUM(f.salarioFuncionario)) as 'Total_Salarios_Funcionarios'
                    FROM funcionarios as F
                    WHERE MONTH(F.mesFimContrato) >= '`+mesFuncionario+`' AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`' AND F.mesFimcontrato is NOT NULL
                    OR F.mesFimContrato is NULL AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`';`, function(erro,salario){
                        if(erro){
                            throw erro;
                        }
                        db.query(`SELECT (COUNT(I.ingressoId) * 20) as 'Ganhos' 
                        FROM dbCinema.ingressos as I
                        WHERE MONTH(I.mes) = '`+mesIngresso+`'; `, function(erro,ingressoC){
                            if(erro){
                                throw erro;
                            }
                            res.render('indexAdmin', { 
                                listaFuncionarios: funcionarios,
                                listaIngressos: ingressos,
                                listaSalario: salario,
                                listaIngresso: ingressoC,
                                mesSelecionado: mesIngresso,
                                mesSelecionadoF: mesFuncionario
                            });
                        });  
                    });   
                });
            });
});

router.post("/admin-loggedI", function(req,res){
    var mes = req.body.mes;
    localStorage.setItem('mesIngresso', ''+mes+'');

    var mesFuncionario = localStorage.getItem('mesFuncionario');
    if(mesFuncionario == null){
        mesFuncionario = 1
    }

    var mesIngresso = localStorage.getItem('mesIngresso');
    if(mesIngresso == null){
        mesIngresso = 1
    }

    db.query(`SELECT F.idFuncionario, F.nomeFuncionario, F.cpfFuncionario, F.cargoFuncionario , F.salarioFuncionario, DATE_FORMAT(F.mesContratacao, "%d-%m-%Y") as 'Contratado', DATE_FORMAT(F.mesContratacao, "%Y-%m-%d") as 'mesContratado', DATE_FORMAT(F.mesFimContrato, "%Y-%m-%d") as 'mesFimContrato', DATE_FORMAT(F.mesFimContrato, "%d-%m-%Y") as 'FimContrato', F.idFilial, F.contratoAtivo,
    CASE WHEN F.idFilial = 1 THEN "Paraná" WHEN F.idFilial = 2 THEN "São Paulo" END as 'Filial',
    CASE WHEN F.contratoAtivo = 1 THEN "Ativo" WHEN F.contratoAtivo = 2 THEN "Inativo" END as 'Contrato'
    FROM dbCinema.funcionarios as F ORDER BY salarioFuncionario;`, function(erro,funcionarios){
                if(erro){
                    throw erro;
                }
                db.query(`SELECT I.sessaoId, I.nome, I.cpf, I.email,  DATE_FORMAT(I.mes, "%d-%m-%Y") as 'Date', 
                CASE WHEN I.idFilial = 1 THEN "Paraná" WHEN I.idFilial = 2 THEN "São Paulo" END as 'Filial'
                FROM dbCinema.ingressos as I ORDER BY I.ingressoId; `, function(erro,ingressos){
                    if(erro){
                        throw erro;
                    }
                    db.query(`SELECT (SUM(f.salarioFuncionario)) as 'Total_Salarios_Funcionarios'
                    FROM funcionarios as F
                    WHERE MONTH(F.mesFimContrato) >= '`+mesFuncionario+`' AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`' AND F.mesFimcontrato is NOT NULL
                    OR F.mesFimContrato is NULL AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`';`, function(erro,salario){
                        if(erro){
                            throw erro;
                        }
                        db.query(`SELECT (COUNT(I.ingressoId) * 20) as 'Ganhos' 
                        FROM dbCinema.ingressos as I
                        WHERE MONTH(I.mes) = '`+mesIngresso+`'; `, function(erro,ingressoC){
                            if(erro){
                                throw erro;
                            }
                            res.render('indexAdmin', { 
                                listaFuncionarios: funcionarios,
                                listaIngressos: ingressos,
                                listaSalario: salario,
                                listaIngresso: ingressoC,
                                mesSelecionado: mesIngresso,
                                mesSelecionadoF: mesFuncionario
                            });
                        });  
                    });   
                });
            });
    
});

router.post("/admin-loggedF", function(req,res){
    var mes = req.body.mes;
    localStorage.setItem('mesFuncionario', ''+mes+'');
    var mesFuncionario = localStorage.getItem('mesFuncionario');
    if(mesFuncionario == null){
        mesFuncionario = 1
    }

    var mesIngresso = localStorage.getItem('mesIngresso');
    if(mesIngresso == null){
        mesIngresso = 1
    }

    db.query(`SELECT F.idFuncionario, F.nomeFuncionario, F.cpfFuncionario, F.cargoFuncionario , F.salarioFuncionario, DATE_FORMAT(F.mesContratacao, "%d-%m-%Y") as 'Contratado', DATE_FORMAT(F.mesContratacao, "%Y-%m-%d") as 'mesContratado', DATE_FORMAT(F.mesFimContrato, "%Y-%m-%d") as 'mesFimContrato', DATE_FORMAT(F.mesFimContrato, "%d-%m-%Y") as 'FimContrato', F.idFilial, F.contratoAtivo,
    CASE WHEN F.idFilial = 1 THEN "Paraná" WHEN F.idFilial = 2 THEN "São Paulo" END as 'Filial',
    CASE WHEN F.contratoAtivo = 1 THEN "Ativo" WHEN F.contratoAtivo = 2 THEN "Inativo" END as 'Contrato'
    FROM dbCinema.funcionarios as F ORDER BY salarioFuncionario;`, function(erro,funcionarios){
                if(erro){
                    throw erro;
                }
                db.query(`SELECT I.sessaoId, I.nome, I.cpf, I.email,  DATE_FORMAT(I.mes, "%d-%m-%Y") as 'Date', 
                CASE WHEN I.idFilial = 1 THEN "Paraná" WHEN I.idFilial = 2 THEN "São Paulo" END as 'Filial'
                FROM dbCinema.ingressos as I ORDER BY I.ingressoId; `, function(erro,ingressos){
                    if(erro){
                        throw erro;
                    }
                    db.query(`SELECT (SUM(f.salarioFuncionario)) as 'Total_Salarios_Funcionarios'
                    FROM funcionarios as F
                    WHERE MONTH(F.mesFimContrato) >= '`+mesFuncionario+`' AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`' AND F.mesFimcontrato is NOT NULL
                    OR F.mesFimContrato is NULL AND MONTH(F.mesContratacao) <= '`+mesFuncionario+`';`, function(erro,salario){
                        if(erro){
                            throw erro;
                        }
                        db.query(`SELECT (COUNT(I.ingressoId) * 20) as 'Ganhos' 
                        FROM dbCinema.ingressos as I
                        WHERE MONTH(I.mes) = '`+mesIngresso+`'; `, function(erro,ingressoC){
                            if(erro){
                                throw erro;
                            }
                            res.render('indexAdmin', { 
                                listaFuncionarios: funcionarios,
                                listaIngressos: ingressos,
                                listaSalario: salario,
                                listaIngresso: ingressoC,
                                mesSelecionado: mesIngresso,
                                mesSelecionadoF: mesFuncionario
                            });
                        });  
                    });   
                });
            });
})


module.exports ={
    router,
}