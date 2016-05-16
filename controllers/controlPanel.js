views.appendControlPanel()

if (controllers.bot.controlPanel.isHidden){
	views.hideControlPanel()
} else {
	views.showControlPanel()
}

for(fieldId in controllers.bot.controlPanel.fieldsContent){
	document.getElementById(fieldId).value = controllers.bot.controlPanel.fieldsContent[fieldId]
}

var ipSearchResult = document.getElementById(FIELD_IP_SEARCH_RESULT)
if (ipSearchResult.value != ""){
	ipSearchResult.style.display = "block"
} else {
	ipSearchResult.style.display = "none"
}

var fieldsContent = document.getElementsByClassName("fieldsContent")
for (var i = 0; i < fieldsContent.length; i++) {
	fieldsContent[i].addEventListener("change", function(){
		controllers.bot.controlPanel.fieldsContent[this.id] = this.value
		controllers.storage.set(controllers.bot)
	})
}

//Hide command panel if close button is pressed
document.getElementById(COMMAND_PANEL_CLOSE_BUTTON_DOM_ID).addEventListener("click", function(){
	controllers.functions.hidePanel()
})
