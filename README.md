# Ionic React useIonModal Issue

Quick repro for issue involving Ionic React's new overlay hook for Modal. 

1. Modal is mounted outside app tree so cannot access any app-wide context
2. Modal is not destroyed after `dismiss` is called.
