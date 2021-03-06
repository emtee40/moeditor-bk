/*
*  This file is part of Moeditor.
*
*  Copyright (c) 2016 Menci <huanghaorui301@gmail.com>
*  Copyright (c) 2016 lucaschimweg
*  Copyright (c) 2016 douglaseccker
*  Copyright (c) 2016 PifyZ
*  Copyright (c) 2016 Hyuchia
*  Copyright (c) 2016 welksonramos
*  Copyright (c) 2016 caiocdasilva
*  Copyright (c) 2016 lawgsy <lawgsy@gmail.com>
*
*  Moeditor is free software: you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation, either version 3 of the License, or
*  (at your option) any later version.
*
*  Moeditor is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  You should have received a copy of the GNU General Public License
*  along with Moeditor. If not, see <http://www.gnu.org/licenses/>.
*
*  The translation providers:
*   - en: Menci
*   - zh_CN: Menci
*   - de: lucaschimweg
*   - pt: douglaseccker & welksonramos & caiocdasilva
*   - fr: PifyZ
*   - es: Hyuchia
*   - nl: lawgsy
*   - it: iamsisar
*
*  If you want to help translate this app, please copy the `en` items of the
*  `strings` constant as the template, and fill each item with the translated
*  string. The `_name` item in a language is the language's name.
*
*  You can translate for a language (e.g. en) or a language with specified
*  region (e.g. zh_CN). The app will choose the language with specified region
*  first, fallback to only language when the former is unavailable, and fallback
*  to English when they are all unavailable.
*
*  Send a PR to us after translating.
*
*/

'use strict'

const osLocale = require('os-locale');

class MoeditorLocale {
	constructor() {
        if (moeApp.config.get('locale') !== 'default') {
            this.locale = moeApp.config.get('locale');
        } else {
            this.locale = 'default';
        }

        this.sysLocale = osLocale.sync();
        if (typeof strings[this.sysLocale] === 'undefined') {
            this.sysLocale = this.sysLocale.substr(0, this.sysLocale.indexOf('_'));
            if (typeof strings[this.sysLocale] === 'undefined') {
                this.sysLocale = '';
            }
        }

        if (this.locale === 'default') {
            this.locale = this.sysLocale;
        }
	}

    setLocale(locale) {
        this.locale = locale;
        if (this.locale === 'default') {
            this.locale = this.sysLocale;
        }
    }

	get(str) {
        let res;
		if (typeof strings[this.locale] === 'undefined' || typeof strings[this.locale][str] === 'undefined') {
            res = strings['en'][str];
            console.log('Localization of "' + str + '" in "' + this.locale + '" failed, falling back to English.');
        } else {
            res = strings[this.locale][str];
        }
        return res;
	}

    getLanguages() {
        let languages = {};
        for (let lang in strings) languages[lang] = strings[lang]._name;
        return languages;
    }
}

module.exports = MoeditorLocale;

const strings = {
	"en": {
        "_name": "English",

        "New": "New",
        "Open": "Open",
        "Save": "Save",
        "Save as": "Save as",
        "Export as HTML": "Export as HTML",
        "Export as PDF": "Export as PDF",
        "Settings": "Settings",
        "About": "About",

        "Menu": "Menu",
        "Directory": "Directory",
        "Toggle focus mode": "Toggle focus mode",
        "Edit mode": "Edit mode",

        "Write Mode": "Write Mode",
        "Read Mode": "Read Mode",
        "Preview Mode": "Preview Mode",
        "Wide": "Wide",
        "Medium": "Medium",
        "Narrow": "Narrow",

        "Yes": "Yes",
        "No": "No",
        "Cancel": "Cancel",
        "Confirm": "Confirm",

        "Save changes to file?": "Save changes to file?",
        "File changed by another program, reload?": "File changed by another program, reload?",

        "Markdown Documents": "Markdown Documents",
        "HTML Documents": "HTML Documents",
        "PDF Documents": "PDF Documents",
        "CSS Files": "CSS Files",
        "All Files": "All Files",
        "Saved successfully.": "Saved successfully.",
        "Can't save file": "Can't save file",
        "Exporting as HTML, please wait ...": "Exporting as HTML, please wait ...",
        "Exporting as PDF, please wait ...": "Exporting as PDF, please wait ...",
        "Can't export as HTML": "Can't export as HTML",
        "Can't export as PDF": "Can't export as PDF",

        "General": "General",
        "Edit": "Edit",
        "Appearance": "Appearance",
        "Render": "Render",
        "Language": "Language",
        "Reload when file changed": "Reload when file changed",
        "Font": "Editor Font",
        "Font Size": "Font Size",
        "Line Height": "Line Height",
        "Tab Size": "Tab Size",
        "Color Theme": "Color Theme",
        "TeX Math Expressions":"TeX Math Expressions",
        "UML Diagrams": "UML Diagrams",
        "Brakes": "Brakes",
        "Highlight Theme": "Highlight Theme",
        "Render Theme": "Render Theme",
        "Custom CSSs": "Custom CSSs",

        "Default": "Default",
        "System Default": "System Default",

        "version": "version",

        "Auto": "Auto",
        "Prompt": "Prompt",
        "Never": "Never",

        "Undo": "Undo",
        "Redo": "Redo",
        "Cut": "Cut",
        "Copy": "Copy",
        "Paste": "Paste",
        "Delete": "Delete",
        "Select All": "Select All",

        "Services": "Services",
        "Hide": "Hide",
        "Hide Others": "Hide Others",
        "Show All": "Show All",
        "Quit": "Quit",
        "Close": "Close",
        "Minimize": "Minimize",
        "Zoom": "Zoom",
        "Bring All to Front": "Bring All to Front",
        "File": "File",
        "Export": "Export",
        "Mode": "Mode",
        "View": "View",
        "Window": "Window",
        "Help": "Help",
        "Toggle Developer Tools": "Toggle Developer Tools",
        "Preference": "Preference"
	},
    "zh_CN": {
        "_name": "????????????",

        "New": "??????",
        "Open": "??????",
        "Save": "??????",
        "Save as": "?????????",
        "Export as HTML": "????????? HTML",
        "Export as PDF": "????????? PDF",
        "Settings": "??????",
        "About": "??????",

        "Menu": "??????",
        "Directory": "??????",
        "Toggle focus mode": "??????????????????",
        "Edit mode": "????????????",

        "Write Mode": "????????????",
        "Read Mode": "????????????",
        "Preview Mode": "????????????",
        "Wide": "???",
        "Medium": "??????",
        "Narrow": "???",

        "Yes": "???",
        "No": "???",
        "Cancel": "??????",
        "Confirm": "??????",

        "Save changes to file?": "???????????????????????????",
        "File changed by another program, reload?": "???????????????????????????????????????????????????",

        "Markdown Documents": "Markdown ??????",
        "HTML Documents": "HTML ??????",
        "PDF Documents": "PDF ??????",
        "CSS Files": "CSS ??????",
        "All Files": "????????????",
        "Saved successfully.": "???????????????",
        "Can't save file": "??????????????????",
        "Exporting as HTML, please wait ...": "??????????????? HTML???????????? ...",
        "Exporting as PDF, please wait ...": "??????????????? PDF???????????? ...",
        "Can't export as HTML": "??????????????? HTML",
        "Can't export as PDF": "??????????????? PDF",

        "General": "??????",
        "Edit": "??????",
        "Appearance": "??????",
        "Render": "??????",
        "Language": "??????",
        "Reload when file changed": "????????????????????????????????????",
        "Font": "??????",
        "Font Size": "????????????",
        "Line Height": "??????",
        "Tab Size": "Tab ??????",
        "Color Theme": "????????????",
        "TeX Math Expressions": "TeX ???????????????",
        "UML Diagrams": "UML ??????",
        "Brakes": "Brakes",
        "Highlight Theme": "????????????",
        "Render Theme": "????????????",
        "Custom CSSs": "????????? CSS",

        "Default": "??????",
        "System Default": "????????????",

        "version": "??????",

        "Auto": "??????",
        "Prompt": "??????",
        "Never": "??????",

        "Undo": "??????",
        "Redo": "??????",
        "Cut": "??????",
        "Copy": "??????",
        "Paste": "??????",
        "Delete": "??????",
        "Select All": "??????",

        "Services": "??????",
        "Hide": "??????",
        "Hide Others": "????????????",
        "Show All": "????????????",
        "Quit": "??????",
        "Close": "??????",
        "Minimize": "?????????",
        "Zoom": "??????",
        "Bring All to Front": "??????????????????",
        "File": "??????",
        "Export": "??????",
        "Mode": "??????",
        "View": "??????",
        "Window": "??????",
        "Help": "??????",
        "Toggle Developer Tools": "?????????????????????",
        "Preference": "????????????"
    },
	"de": {
        "_name": "Deutsch",

        "New": "Neu",
        "Open": "??ffnen",
        "Save": "Speichern",
        "Save as": "Speichern als...",
        "Export as HTML": "Als HTML exportieren",
        "Export as PDF": "Als PDF exportieren",
        "Settings": "Einstellungen",
        "About": "??ber",

        "Menu": "Men??",
        "Directory": "Ordner",
        "Toggle focus mode": "Fokusmodus umschalten",
        "Edit mode": "Bearbeitungsmodus",

        "Write Mode": "Schreibmodus",
        "Read Mode": "Lesemodus",
        "Preview Mode": "Vorschaumodus",
        "Wide": "Breit",
        "Medium": "Normal",
        "Narrow": "Schmal",

        "Yes": "Ja",
        "No": "Nein",
        "Cancel": "Abbrechen",
        "Confirm": "Best??tigen",

        "Save changes to file?": "??nderungen in Datei speichern?",
        "File changed by another program, reload?": "Dateien von anderem Programm ge??ndert, neu laden?",

        "Markdown Documents": "Markdown Dokumente",
        "HTML Documents": "HTML Dokumente",
        "PDF Documents": "PDF Dokumente",
        "CSS Files": "CSS Dateien",
        "All Files": "Alle Dateien",
        "Saved successfully.": "Speichern erfolgreich.",
        "Can't save file": "Datei kann nicht gespeichert werden.",
        "Exporting as HTML, please wait ...": "Wird als HTML exportiert, bitte warten ...",
        "Exporting as PDF, please wait ...": "Wird als HTML exportiert, bitte warten ...",
        "Can't export as HTML": "Kann nicht als HTML exporiert werden.",
        "Can't export as PDF": "Kann nicht als PDF exporiert werden.",

        "General": "Allgemein",
        "Edit": "Bearbeiten",
        "Appearance": "Aussehen",
        "Render": "Rendern",
        "Language": "Sprache",
        "Reload when file changed": "Neu laden wenn Datei ge??ndert",
        "Font": "Editor Schriftart",
        "Font Size": "Schriftgr????e",
        "Line Height": "Zeilenh??he",
        "Tab Size": "Tabgr????e",
        "Color Theme": "Farbthema",
        "TeX Math Expressions":"TeX Mathematikausdr??cke",
        "UML Diagrams": "UML Diagramme",
        "Brakes": "Brakes",
        "Highlight Theme": "Highlight-Thema",
        "Render Theme": "Renderthema",
        "Custom CSSs": "Benutzerdefiniertes CSS",

        "Default": "Standart",
        "System Default": "Systemstandart",

        "version": "Version",

        "Auto": "Automatisch",
        "Prompt": "Fragen",
        "Never": "Nie",

        "Undo": "R??ckg??ngig machen",
        "Redo": "Wiederholen",
        "Cut": "Ausscheiden",
        "Copy": "Kopieren",
        "Paste": "Einf??gen",
        "Delete": "L??schen",
        "Select All": "Alles ausw??hlen",

        "Services": "Services",
        "Hide": "Verstecken",
        "Hide Others": "Andere Verstecken",
        "Show All": "Alle zeigen",
        "Quit": "Beenden",
        "Close": "Schlie??en",
        "Minimize": "Minimieren",
        "Zoom": "Zoom",
        "Bring All to Front": "Alle anzeigen",
        "File": "Datei",
        "Export": "Exportieren",
        "Mode": "Modus",
        "View": "Ansicht",
        "Window": "Fenster",
        "Help": "Hilfe",
        "Toggle Developer Tools": "Entwicklereinstellungen umschalten",
        "Preference": "Einstellung"
	},
	"pt": {
        "_name": "Portugu??s",

        "New": "Novo",
        "Open": "Abrir",
        "Save": "Salvar",
        "Save as": "Salvar como",
        "Export as HTML": "Exportar como HTML",
        "Export as PDF": "Exportar como PDF",
        "Settings": "Configura????es",
        "About": "Sobre",

        "Menu": "Menu",
        "Directory": "Diret??rio",
        "Toggle focus mode": "Alternar para o modo foco",
        "Edit mode": "Editar modo",

        "Write Mode": "Modo Escrita",
        "Read Mode": "Modo Leitura",
        "Preview Mode": "Mode de Pr??-visualiza????o",
        "Wide": "Largo",
        "Medium": "M??dio",
        "Narrow": "Estreito",

        "Yes": "Sim",
        "No": "N??o",
        "Cancel": "Cancelar",
        "Confirm": "Confirmar",

        "Save changes to file?": "Salvar as altera????es no arquivo?",
        "File changed by another program, reload?": "Arquivo modificado por outro programa, recarregar?",

        "Markdown Documents": "Documentos Markdown",
        "HTML Documents": "Documentos HTML",
        "PDF Documents": "Documentos PDF",
        "CSS Files": "Arquivos CSS",
        "All Files": "Todos os Arquivos",
        "Saved successfully.": "Salvo com sucesso",
        "Can't save file": "N??o ?? poss??vel salvar o arquivo",
        "Exporting as HTML, please wait ...": "Exportando como HTML, aguarde ...",
        "Exporting as PDF, please wait ...": "Exportando como PDF, aguarde...",
        "Can't export as HTML": "N??o ?? poss??vel exportar como HTML",
        "Can't export as PDF": "N??o ?? poss??vel exportar como PDF",

        "General": "Geral",
        "Edit": "Editar",
        "Appearance": "Apar??ncia",
        "Render": "Renderiza????o",
        "Language": "Idioma",
        "Reload when file changed": "Recarregar quando o arquivo for alterado",
        "Font": "Fonte",
        "Font Size": "Tamanho da Fonte",
        "Line Height": "Altura da Linha",
        "Tab Size": "Tamanho da Tabula????o",
        "Color Theme": "Tema",
        "TeX Math Expressions":"Express??es TeX Math",
        "UML Diagrams": "Diagramas UML",
        "Brakes": "Brakes",
        "Highlight Theme": "Tema de Sintaxe",
        "Render Theme": "Tema de Renderiza????o",
        "Custom CSSs": "CSSs Personalizados",

        "Default": "Padr??o",
        "System Default": "Padr??o do Sistema",

        "version": "vers??o",

        "Auto": "Autom??tico",
        "Prompt": "Perguntar",
        "Never": "Nunca",

        "Undo": "Desfazer",
        "Redo": "Refazer",
        "Cut": "Cortar",
        "Copy": "Copiar",
        "Paste": "Colar",
        "Delete": "Excluir",
        "Select All": "Selecionar Tudo",

        "Services": "Servi??os",
        "Hide": "Ocultar",
        "Hide Others": "Ocultar Outros",
        "Show All": "Exibir Tudo",
        "Quit": "Sair",
        "Close": "Fechar",
        "Minimize": "Minimizar",
        "Zoom": "Zoom",
        "Bring All to Front": "Trazer todas para frente",
        "File": "Arquivo",
        "Export": "Exportar",
        "Mode": "Modo",
        "View": "Visualizar",
        "Window": "Janela",
        "Help": "Ajuda",
        "Toggle Developer Tools": "Alternar Ferramentas de Desenvolvimento",
        "Preference": "Prefer??ncias"
	},
	"fr": {
        "_name": "Fran??ais",

        "New": "Nouveau",
        "Open": "Ouvrir",
        "Save": "Enregistrer",
        "Save as": "Enregistrer sous",
        "Export as HTML": "Exporter comme HTML",
        "Export as PDF": "Exporter comme PDF",
        "Settings": "Param??tres",
        "About": "?? propos",

        "Menu": "Menu",
        "Directory": "R??pertoire",
        "Toggle focus mode": "Basculer en mode focus",
        "Edit mode": "Mode ??dition",

        "Write Mode": "Mode ??criture",
        "Read Mode": "Mode lecture",
        "Preview Mode": "Mode pr??visualisation",
        "Wide": "Large",
        "Medium": "Moyen",
        "Narrow": "??troit",

        "Yes": "Oui",
        "No": "Non",
        "Cancel": "Annuler",
        "Confirm": "Confirmer",

        "Save changes to file?": "Enregistrer les changements?",
        "File changed by another program, reload?": "Fichier modifi?? par un autre programme, recharger?",

        "Markdown Documents": "Documents Markdown",
        "HTML Documents": "Documents HTML",
        "PDF Documents": "Documents PDF",
        "CSS Files": "Fichiers CSS",
        "All Files": "Tous les fichiers",
        "Saved successfully.": "Enregistrement r??ussi.",
        "Can't save file": "Impossible d'enregistrer le fichier",
        "Exporting as HTML, please wait ...": "Exportation au format HTML, veuillez patienter...",
        "Exporting as PDF, please wait ...": "Exportation au format PDF, veuillez patienter...",
        "Can't export as HTML": "Ne peut pas ??tre export?? au format HTML",
        "Can't export as PDF": "Ne peut pas ??tre export?? au format PDF",

        "General": "G??n??ral",
        "Edit": "??dition",
        "Appearance": "Apparence",
        "Render": "Rendu",
        "Language": "Langue",
        "Reload when file changed": "Recharger quand le fichier est modifi??",
        "Font": "Police",
        "Font Size": "Taille de la police",
        "Line Height": "Hauteur de ligne",
        "Tab Size": "Taille de tabulation",
        "Color Theme": "Couleur du th??me",
        "TeX Math Expressions": "Expressions TeX Math",
        "UML Diagrams": "Diagrammes UML",
        "Brakes": "Brakes",
        "Highlight Theme": "Th??me de coloration syntaxique",
        "Render Theme": "Th??me de rendu",
        "Custom CSSs": "CSS personnalis??s",

        "Default": "Par d??faut",
        "System Default": "Par d??faut du syst??me",

        "version": "version",

        "Auto": "Automatique",
        "Prompt": "Demander",
        "Never": "Jamais",

        "Undo": "Annuler",
        "Redo": "Refaire",
        "Cut": "Couper",
        "Copy": "Copier",
        "Paste": "Coller",
        "Delete": "Supprimer",
        "Select All": "Tout s??lectionner",

        "Services": "Services",
        "Hide": "Cacher",
        "Hide Others": "Cacher les autres",
        "Show All": "Afficher tout",
        "Quit": "Quitter",
        "Close": "Fermer",
        "Minimize": "Minimiser",
        "Zoom": "Zoom",
        "Bring All to Front": "Mettre tout ?? l'avant",
        "File": "Fichier",
        "Export": "Exportation",
        "Mode": "Mode",
        "View": "Voir",
        "Window": "Fen??tre",
        "Help": "Aide",
        "Toggle Developer Tools": "Basculer vers les outils d??veloppeurs",
        "Preference": "Pr??f??rence"
	},
	"es": {
        "_name": "Espa??ol",

        "New": "Nuevo",
        "Open": "Abrir",
        "Save": "Guardar",
        "Save as": "Guardar como",
        "Export as HTML": "Exportar como HTML",
        "Export as PDF": "Exportar como PDF",
        "Settings": "Configuraci??n",
        "About": "Acerca de",

        "Menu": "Men??",
        "Directory": "Directorio",
        "Toggle focus mode": "Activar modo de concentraci??n",
        "Edit mode": "Modo de edici??n",

        "Write Mode": "Modo de Escritura",
        "Read Mode": "Modo de Lectura",
        "Preview Mode": "Modo de Previsualizaci??n",
        "Wide": "Amplio",
        "Medium": "Medio",
        "Narrow": "Estrecho",

        "Yes": "S??",
        "No": "No",
        "Cancel": "Cancelar",
        "Confirm": "Confirmar",

        "Save changes to file?": "??Guardar cambios?",
        "File changed by another program, reload?": "El Archivo ha sido modificado por otro programa, ??desea recargarlo?",

        "Markdown Documents": "Documentos Markdown",
        "HTML Documents": "Documentos HTML",
        "PDF Documents": "Documentos PDF",
        "CSS Files": "Archivos CSS",
        "All Files": "Todos los Archivos",
        "Saved successfully.": "Guardado Exitosamente.",
        "Can't save file": "El archivo no pudo ser guardado",
        "Exporting as HTML, please wait ...": "Exportando como HTML, por favor espere...",
        "Exporting as PDF, please wait ...": "Exportando como PDF, por favor espere...",
        "Can't export as HTML": "No se puede exportar como HTML",
        "Can't export as PDF": "No se puede exportar como PDF",

        "General": "General",
        "Edit": "Editar",
        "Appearance": "Apariencia",
        "Render": "Renderizaci??n",
        "Language": "Lenguaje",
        "Reload when file changed": "Recargar cuando el archivo haya sido modificado",
        "Font": "Tipograf??a del Editor",
        "Font Size": "Tama??o de la Letra",
        "Line Height": "Interlineado",
        "Tab Size": "Tama??o de Tabulaci??n",
        "Color Theme": "Tema de Color",
        "TeX Math Expressions":"Expresiones de TeX Math",
        "UML Diagrams": "Diagramas UML",
        "Brakes": "Brakes",
        "Highlight Theme": "Tema de Syntaxis",
        "Render Theme": "Tema de Renderizaci??n",
        "Custom CSSs": "CSSs Personalizados",

        "Default": "Predeterminado",
        "System Default": "Predeterminado del Sistema",

        "version": "versi??n",

        "Auto": "Auto",
        "Prompt": "Mensaje",
        "Never": "Nunca",

        "Undo": "Deshacer",
        "Redo": "Rehacer",
        "Cut": "Cortar",
        "Copy": "Copiar",
        "Paste": "Pegar",
        "Delete": "Borrar",
        "Select All": "Seleccionar Todo",

        "Services": "Servicios",
        "Hide": "Esconder",
        "Hide Others": "Esconder Otros",
        "Show All": "Mostrar Todo",
        "Quit": "Salir",
        "Close": "Cerrar",
        "Minimize": "Minimizar",
        "Zoom": "Zoom",
        "Bring All to Front": "Traer Todo al Frente",
        "File": "Archivo",
        "Export": "Exportar",
        "Mode": "Modo",
        "View": "Ver",
        "Window": "Ventana",
        "Help": "Ayuda",
        "Toggle Developer Tools": "Activar Herramientas de Desarrollador",
        "Preference": "Preferencias"
    },
	"nl": {
        "_name": "Nederlands",

        "New": "Nieuw",
        "Open": "Open",
        "Save": "Opslaan",
        "Save as": "Opslaan als",
        "Export as HTML": "Exporteren als HTML",
        "Export as PDF": "Exporteren als PDF",
        "Settings": "Instellingen",
        "About": "Over",

        "Menu": "Menu",
        "Directory": "Map",
        "Toggle focus mode": "Focus modus aan-/uitzetten",
        "Edit mode": "Bewerk modus",

        "Write Mode": "Schrijf Modus",
        "Read Mode": "Lees Modus",
        "Preview Mode": "Voorbeeld Modus",
        "Wide": "Breed",
        "Medium": "Gemiddeld",
        "Narrow": "Smal",

        "Yes": "Ja",
        "No": "Nee",
        "Cancel": "Annuleren",
        "Confirm": "Bevestigen",

        "Save changes to file?": "Wijzigingen aan bestand opslaan?",
        "File changed by another program, reload?": "Bestand is gewijzigd door een ander programma, herladen?",

        "Markdown Documents": "Markdown Documenten",
        "HTML Documents": "HTML Documenten",
        "PDF Documents": "PDF Documenten",
        "CSS Files": "CSS Bestanden",
        "All Files": "Alle Bestanden",
        "Saved successfully.": "Succesvol opgeslagen.",
        "Can't save file": "Kan bestand niet opslaan",
        "Exporting as HTML, please wait ...": "Exporteren als HTML, even geduld alstublieft ...",
        "Exporting as PDF, please wait ...": "Exporteren als PDF, even geduld alstublieft ...",
        "Can't export as HTML": "Kan niet exporteren als HTML",
        "Can't export as PDF": "Kan niet exporteren als PDF",

        "General": "Algemeen",
        "Edit": "Bewerken",
        "Appearance": "Uiterlijk",
        "Render": "Renderen",
        "Language": "Taal",
        "Reload when file changed": "Herladen wanneer het bestand is gewijzigd",
        "Font": "Lettertype",
        "Font Size": "Lettertypegrootte",
        "Line Height": "Regelhoogte",
        "Tab Size": "Tabbreedte",
        "Color Theme": "Kleurthema",
        "TeX Math Expressions":"TeX Math Expressies",
        "UML Diagrams": "UML Diagrammen",
        "Brakes": "Brakes",
        "Highlight Theme": "Highlight Thema",
        "Render Theme": "Render Thema",
        "Custom CSSs": "Aangepaste CSSen",

        "Default": "Standaard",
        "System Default": "Systeemstandaard",

        "version": "versie",

        "Auto": "Automatisch",
        "Prompt": "Vragen",
        "Never": "Nooit",

        "Undo": "Ongedaan maken",
        "Redo": "Herhalen",
        "Cut": "Knippen",
        "Copy": "Kopi??ren",
        "Paste": "Plakken",
        "Delete": "Verwijderen",
        "Select All": "Alles Selecteren",

        "Services": "Diensten",
        "Hide": "Verstoppen",
        "Hide Others": "Verstop Anderen",
        "Show All": "Alles tonen",
        "Quit": "Afsluiten",
        "Close": "Sluiten",
        "Minimize": "Minimaliseren",
        "Zoom": "Zoom",
        "Bring All to Front": "Alles naar Voren Brengen",
        "File": "Bestand",
        "Export": "Exporteer",
        "Mode": "Modus",
        "View": "Beeld",
        "Window": "Venster",
        "Help": "Help",
        "Toggle Developer Tools": "Developer Tools aan-/uitzetten",
        "Preference": "Voorkeur"
	},
    "it": {
        "_name": "Italian",

        "New": "Nuovo",
        "Open": "Apri",
        "Save": "Salva",
        "Save as": "Save con nome",
        "Export as HTML": "Esporta come HTML",
        "Export as PDF": "Esporta come PDF",
        "Settings": "Impostazioni",
        "About": "About",

        "Menu": "Menu",
        "Directory": "Directory",
        "Toggle focus mode": "Attiva modalit?? concentrazione",
        "Edit mode": "Modalit?? modifica",

        "Write Mode": "Modalit?? scrittura",
        "Read Mode": "Modalit?? lettura",
        "Preview Mode": "Modalit?? anteprima",
        "Wide": "Largo",
        "Medium": "Medio",
        "Narrow": "Stretto",

        "Yes": "S??",
        "No": "No",
        "Cancel": "Annulla",
        "Confirm": "Conferma",

        "Save changes to file?": "Salvare le modifiche apportate al file?",
        "File changed by another program, reload?": "Il file ?? stato modificato da un altro programma, vuoi caricare le nuove modifiche",

        "Markdown Documents": "Documenti Markdown",
        "HTML Documents": "Documenti HTML",
        "PDF Documents": "Documenti PDF",
        "CSS Files": "File CSS",
        "All Files": "Tutti i file",
        "Saved successfully.": "Salvataggio eseguito",
        "Can't save file": "Impossibile salvare il file",
        "Exporting as HTML, please wait ...": "Esportazione HTML in corso, attendere...",
        "Exporting as PDF, please wait ...": "Esportazione PDF in corso, attendere...",
        "Can't export as HTML": "Impossibile esportare in HTML",
        "Can't export as PDF": "Impossibile esportare in PDF",

        "General": "Generale",
        "Edit": "Modifica",
        "Appearance": "Aspetto",
        "Render": "Render",
        "Language": "Lingua",
        "Reload when file changed": "Ricarica quando il file cambia",
        "Font": "Carattere dell'editor",
        "Font Size": "Dimensione carattere",
        "Line Height": "Interlinea",
        "Tab Size": "Tabulazione",
        "Color Theme": "Tema colori",
        "TeX Math Expressions":"Espressioni Tex Math",
        "UML Diagrams": "Diagrammi UML",
        "Brakes": "Brakes",
        "Highlight Theme": "Highlight Theme",
        "Render Theme": "Tema di render",
        "Custom CSSs": "CSS personalizzato",

        "Default": "Predefinito",
        "System Default": "Predefinito dal Sistema",

        "version": "versione",

        "Auto": "Automatico",
        "Prompt": "Chiedi",
        "Never": "Mai",

        "Undo": "Undo",
        "Redo": "Redo",
        "Cut": "Taglia",
        "Copy": "Copia",
        "Paste": "Incolla",
        "Delete": "Cancella",
        "Select All": "Seleziona tutto",

        "Services": "Servizi",
        "Hide": "Nascondi",
        "Hide Others": "Nascondi altri",
        "Show All": "Visualizza tutti",
        "Quit": "Esci",
        "Close": "Chiudi",
        "Minimize": "Riduci",
        "Zoom": "Zoom",
        "Bring All to Front": "Porta tutti in cima",
        "File": "File",
        "Export": "Esporta",
        "Mode": "Modalit??",
        "View": "Vedi",
        "Window": "Finestra",
        "Help": "Aiuto",
        "Toggle Developer Tools": "Attiva strumenti per sviluppatori",
        "Preference": "Preferenza"
    },
    "ru": {
        "_name": "??????????????",

        "New": "??????????????",
        "Open": "??????????????",
        "Save": "??????????????????",
        "Save as": "?????????????????? ??????",
        "Export as HTML": "?????????????? ?? HTML",
        "Export as PDF": "?????????????? ?? PDF",
        "Settings": "??????????????????",
        "About": "?? ??????????????????",

        "Menu": "????????",
        "Directory": "??????????",
        "Toggle focus mode": "?????????????????????? ?????????? ??????????????????????",
        "Edit mode": "?????????????? ??????????",

        "Write Mode": "????????????",
        "Read Mode": "????????????",
        "Preview Mode": "????????????????????????",
        "Wide": "??????????????",
        "Medium": "??????????????",
        "Narrow": "????????????????????",

        "Yes": "????",
        "No": "??????",
        "Cancel": "????????????",
        "Confirm": "??????????????????????????",

        "Save changes to file?": "?????????????????? ???????????????????",
        "File changed by another program, reload?": "???????? ?????? ?????????????? ?? ???????????? ??????????????????, ???????????????? ?????????????????????",

        "Markdown Documents": "Markdown-??????????????????",
        "HTML Documents": "HTML-??????????????????",
        "PDF Documents": "PDF-??????????????????",
        "CSS Files": "CSS-??????????",
        "All Files": "?????? ??????????",
        "Saved successfully.": "???????? ????????????????.",
        "Can't save file": "???? ?????????????? ?????????????????? ????????",
        "Exporting as HTML, please wait ...": "???????? ?????????????? ?? HTML, ????????????????????, ??????????????????...",
        "Exporting as PDF, please wait ...": "???????? ?????????????? ?? PDF, ????????????????????, ??????????????????...",
        "Can't export as HTML": "???? ?????????????? ?????????????????? ?????????????? ?? HTML",
        "Can't export as PDF": "???? ?????????????? ?????????????????? ?????????????? ?? PDF",

        "General": "????????????????",
        "Edit": "????????????",
        "Appearance": "?????????????? ??????",
        "Render": "????????????????????????",
        "Language": "????????",
        "Reload when file changed": "???????????????????? ?????????????????????? ?????? ?????????????????? ??????????",
        "Font": "?????????? ??????????????????",
        "Font Size": "???????????? ????????????",
        "Line Height": "???????????? ??????????",
        "Tab Size": "???????????? ??????????????????",
        "Color Theme": "???????????????? ????????",
        "TeX Math Expressions": "?????????????????? TeX",
        "UML Diagrams": "?????????????????? UML",
        "Brakes": "Brakes",
        "Highlight Theme": "???????? ?????????????????? ????????",
        "Render Theme": "???????? ????????????????????????",
        "Custom CSSs": "???????????????????????????????? CSS",

        "Default": "???? ??????????????????",
        "System Default": "??????????????????",

        "version": "????????????",

        "Auto": "????????????",
        "Prompt": "????????????????????",
        "Never": "??????????????",

        "Undo": "????????????????",
        "Redo": "??????????????",
        "Cut": "????????????????",
        "Copy": "????????????????????",
        "Paste": "????????????????",
        "Delete": "??????????????",
        "Select All": "???????????????? ??????",

        "Services": "????????????",
        "Hide": "????????????",
        "Hide Others": "???????????? ??????????????????",
        "Show All": "???????????????? ??????",
        "Quit": "??????????",
        "Close": "??????????????",
        "Minimize": "????????????????",
        "Zoom": "??????????????",
        "Bring All to Front": "???????????????? ??????",
        "File": "????????",
        "Export": "??????????????",
        "Mode": "??????????",
        "View": "????????????????",
        "Window": "????????",
        "Help": "????????????",
        "Toggle Developer Tools": "????????????????/???????????? ?????????????????????? ????????????????????????",
        "Preference": "??????????????????"
    },
}
