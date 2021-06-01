class EventController extends Stimulus.Controller {
	static values = {
    	code: String
    }
    
    codeValueChanged() {
    	this.handler = new Function(this.codeValue)
    }
    
    run(event) {
    	if (this.handler) {
        	this.handler.call(event)
        }
    }
}

(function() {
    let application;

    if (window.stimulusApplication) {
        application = window.stimulusApplication
    } else {
        application = Stimulus.Application.start()
    }

    application.register('event', EventController)

    window.stimulusApplication = application
})()
