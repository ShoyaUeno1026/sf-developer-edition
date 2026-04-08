import { LightningElement, track, api } from 'lwc';

export default class HelloWorld extends LightningElement {

    // 親コンポーネントから受け取れるプロパティ（@api）
    @api greeting = 'こんにちは';

    // 入力された名前（@track：変更時にHTMLを自動更新）
    @track name = '';

    // メッセージの表示・非表示フラグ
    @track isVisible = false;

    // for:each で繰り返し表示するリストデータ
    learningItems = [
        { id: '1', label: '@api：親コンポーネントからデータを受け取る' },
        { id: '2', label: '@track：値の変更をHTMLに自動反映する' },
        { id: '3', label: 'if:true：条件によって要素を表示・非表示にする' },
        { id: '4', label: 'for:each：リストを繰り返し表示する' },
    ];

    // 名前が入力されているかどうかの判定（テンプレートで if:true に使用）
    get hasName() {
        return this.name.trim().length > 0;
    }

    // 表示する挨拶メッセージ（@api の greeting と @track の name を組み合わせる）
    get greetingMessage() {
        return `${this.greeting}、${this.name}さん！`;
    }

    // 表示切り替えボタンのラベル（isVisible の状態によって変える）
    get toggleLabel() {
        return this.isVisible ? 'メッセージを隠す' : 'メッセージを表示する';
    }

    // 名前入力欄の変更ハンドラ
    handleNameChange(event) {
        this.name = event.target.value;
    }

    // 表示・非表示を切り替えるハンドラ
    handleToggle() {
        this.isVisible = !this.isVisible;
    }
}
