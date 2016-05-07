views.appendControlPanel()

if (controllers.bot.controlPanel.isHidden){
	views.hideControlPanel()
} else {
	views.showControlPanel()
}

for(fieldId in controllers.bot.controlPanel.fieldsContent){
	document.getElementById(fieldId).value = controllers.bot.controlPanel.fieldsContent[fieldId]
}

//Hide command panel if close button is pressed
document.getElementById(COMMAND_PANEL_CLOSE_BUTTON_DOM_ID).addEventListener("click", function(){
	controllers.functions.hidePanel()
})
