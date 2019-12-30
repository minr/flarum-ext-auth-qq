import QQSettingsModal from './components/QQSettingsModal';

app.initializers.add('minr-auth-qq', () => {
    app.extensionSettings['minr-auth-qq'] = () => app.modal.show(new QQSettingsModal());
});
