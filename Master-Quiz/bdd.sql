CREATE TABLE Utilisateur(
id_utilisateur INT,
pseudo_utilisateur VARCHAR(50) NOT NULL,
mdp_utilisateur CHAR(64) NOT NULL,
email_utilisateur VARCHAR(50) NOT NULL,
score_utilisateur INT,
PRIMARY KEY(id_utilisateur),
UNIQUE(pseudo_utilisateur),
UNIQUE(email_utilisateur)
);

CREATE TABLE Quiz(
id_quiz INT,
nom_quiz VARCHAR(50),
PRIMARY KEY(id_quiz)
);

CREATE TABLE Questions(
id_questions INT,
question VARCHAR(50) NOT NULL,
id_quiz INT NOT NULL,
PRIMARY KEY(id_questions),
FOREIGN KEY(id_quiz) REFERENCES Quiz(id_quiz)
);

CREATE TABLE Reponses(
id_reponses INT,
reponse VARCHAR(50) NOT NULL,
reponse_correct LOGICAL NOT NULL,
id_questions INT NOT NULL,
PRIMARY KEY(id_reponses),
FOREIGN KEY(id_questions) REFERENCES Questions(id_questions)
);

CREATE TABLE Participer(
id_utilisateur INT,
id_reponses INT,
id_quiz INT,
Daate DATE,
PRIMARY KEY(id_utilisateur, id_reponses, id_quiz),
FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
FOREIGN KEY(id_reponses) REFERENCES Reponses(id_reponses),
FOREIGN KEY(id_quiz) REFERENCES Quiz(id_quiz)
);
