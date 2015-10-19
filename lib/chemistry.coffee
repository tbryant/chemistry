window.THREE = require '../third/three.min.js'
ChemistryView = require './chemistry-view'
ChemistrySceneView = require './chemistry-scene-view'
{CompositeDisposable} = require 'atom'

module.exports = Chemistry =
  chemistryView: null
  chemistrySceneView: null
  scenePanel: null
  subscriptions: null

  activate: (state) ->
    @chemistryView = new ChemistryView(state.chemistryViewState)

    @chemistrySceneView = new ChemistrySceneView(state.ChemistrySceneViewState)
    @scenePanel = atom.workspace.addRightPanel(item: @chemistrySceneView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'chemistry:toggle': => @toggle()

  deactivate: ->
    @scenePanel.destroy()
    @subscriptions.dispose()
    @chemistryView.destroy()

  serialize: ->
    chemistryViewState: @chemistryView.serialize()

  toggle: ->
    console.log 'Chemistry was toggled!'
    if @scenePanel.isVisible()
      @scenePanel.hide()
    else
      @scenePanel.show()
      @chemistrySceneView.render()
