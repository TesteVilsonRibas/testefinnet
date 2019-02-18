Feature: Login Finnet
  As a user I should able to login into Finnet.

  Scenario: I login with valid credential
    Given I navigate to "http://showroom-painelfornecedor.finnet.com.br/"
    And I click on element having class "adjsMenuAcesso"
    And I enter "candidato2.master" into input field having id "LoginAcesso"
    And I enter "candidato2@" into input field having id "SenhaAcesso"
    And I click on element having class "adjustTxtSuporte"
    And I enter "teste" into input field having id "ImagemCaptcha"
    When I click on element having id "BtnAcessar"
    Then I click on element having class "format_buttons_quebra"
    