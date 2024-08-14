System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EditBox, Button, _decorator, Component, log, Facade, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AuthComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../../../Scripts/Facade", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EditBox = _cc.EditBox;
      Button = _cc.Button;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
    }, function (_unresolved_2) {
      Facade = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56d7d+E0LNJI41PLfxJ4GZs", "AuthComponent", undefined);

      __checkObsolete__(['EditBox', 'Button', '_decorator', 'Component', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", AuthComponent = (_dec = property(EditBox), _dec2 = property(EditBox), _dec3 = property(Button), ccclass(_class = (_class2 = class AuthComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "usernameInput", _descriptor, this);

          _initializerDefineProperty(this, "passwordInput", _descriptor2, this);

          _initializerDefineProperty(this, "loginButton", _descriptor3, this);

          this.isRegistered = false;
        }

        onLoad() {
          this.isRegistered = this.checkIfRegistered();
          this.loadCredentials();
          this.loginButton.node.on('click', this.onLoginButtonClick, this);
        }

        onLoginButtonClick() {
          const username = this.usernameInput.string.trim();
          const password = this.passwordInput.string.trim();

          if (username && password) {
            if (this.isRegistered) {
              if (this.authenticate(username, password)) {
                log('Login successful!');
                (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
                  error: Error()
                }), Facade) : Facade).username = username;
              } else {
                log('Invalid username or password.');
              }
            } else {
              this.register(username, password);
              log('Registration successful! You can now log in.');
            }
          } else {
            log('Please enter both username and password.');
          }
        }

        authenticate(username, password) {
          const savedUsername = localStorage.getItem('username');
          const savedPassword = localStorage.getItem('password');
          return savedUsername === username && savedPassword === password;
        }

        register(username, password) {
          this.saveCredentials(username, password);
          this.isRegistered = true;
        }

        saveCredentials(username, password) {
          // Save credentials to localStorage
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        }

        loadCredentials() {
          const savedUsername = localStorage.getItem('username');
          const savedPassword = localStorage.getItem('password');

          if (savedUsername && savedPassword) {
            this.usernameInput.string = savedUsername;
            this.passwordInput.string = savedPassword;
          }
        }

        checkIfRegistered() {
          const savedUsername = localStorage.getItem('username');
          const savedPassword = localStorage.getItem('password');
          return !!(savedUsername && savedPassword);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "usernameInput", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "passwordInput", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loginButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d408e9d9ae49205507799cf76038b7af1cd30d1d.js.map