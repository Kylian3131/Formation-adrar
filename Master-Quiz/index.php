<?php

class Utilisateur:
    def __init__(self, id_utilisateur, pseudo_utilisateur, mdp_utilisateur, email_utilisateur, score_utilisateur):
        self.id_utilisateur = id_utilisateur
        self.pseudo_utilisateur = pseudo_utilisateur
        self.mdp_utilisateur = mdp_utilisateur
        self.email_utilisateur = email_utilisateur
        self.score_utilisateur = score_utilisateur

class Quiz:
    def __init__(self, id_quiz, nom_quiz):
        self.id_quiz = id_quiz
        self.nom_quiz = nom_quiz

class Questions:
    def __init__(self, id_questions, question, id_quiz):
        self.id_questions = id_questions
        self.question = question
        self.id_quiz = id_quiz

class Reponses:
    def __init__(self, id_reponses, reponse, reponse_correct, id_questions):
        self.id_reponses = id_reponses
        self.reponse = reponse
        self.reponse_correct = reponse_correct
        self.id_questions = id_questions

class Participer:
    def __init__(self, id_utilisateur, id_reponses, id_quiz, daate):
        self.id_utilisateur = id_utilisateur
        self.id_reponses = id_reponses
        self.id_quiz = id_quiz
        self.daate = daate
?>