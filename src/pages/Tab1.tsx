import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from '@ionic/react'
import './Tab1.css'

function ModalHookTest({ onDismiss }: any) {
  return (
    <>
      <p>MODAL</p>
      <button onClick={onDismiss}>click</button>
    </>
  )
}

function Tab1() {
  const [present, dismiss] = useIonModal(ModalHookTest, {
    onDismiss: handleDismiss,
  })

  function handleDismiss() {
    dismiss()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => present()}>Open Modal</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Tab1
