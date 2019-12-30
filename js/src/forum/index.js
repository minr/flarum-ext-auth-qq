import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('mionr-auth-qq', () => {
    extend(LogInButtons.prototype, 'items', function(items) {
        items.add('google',
        <LogInButton
        className="Button LogInButton--QQ"
        icon="fab fa-qq"
        path="/auth/qq">
            {app.translator.trans('minr-auth-qq.forum.log_in.with_qq_button')}
            </LogInButton>
    );
    });
});
