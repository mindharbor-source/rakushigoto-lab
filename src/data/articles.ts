export type ArticleSummary = {
  title: string;
  path: string;
  category: string;
  summary: string;
};

export const articles: ArticleSummary[] = [
  { title: 'Web会議用マイクの選び方｜失敗しない7項目', path: 'web-meeting-microphone-selection-guide/', category: '在宅勤務', summary: '1人・複数人・接続方法から購入条件を整理。' },
  { title: 'ATR4800-USBを仕様レビュー', path: 'atr4800-usb-review/', category: '在宅勤務', summary: 'Web会議・文字起こしに向く人と購入前の注意点。' },
  { title: 'Jabra Speak2 40と55の違いを比較', path: 'jabra-speak2-40-vs-55/', category: '在宅勤務', summary: '有線とBluetooth、どちらを選ぶべきか比較。' },
  { title: 'AI文字起こしの精度を上げる7つの方法', path: 'improve-ai-transcription-accuracy/', category: 'AI仕事術', summary: '誤変換を減らす録音・マイク・話し方のチェックリスト。' },
  { title: 'AI文字起こしの精度を上げたい人向けWeb会議用マイク3選', path: 'web-meeting-microphones-for-ai-transcription/', category: '在宅勤務', summary: '1人用・複数人用・接続方法から3機種を比較。' },
  { title: '会社で生成AIを安全に使うための基本チェックリスト', path: 'generative-ai-security/', category: 'AI仕事術', summary: '情報漏えいを避けるための基本ルール。' },
  { title: 'AI議事録ツールを選ぶ7つの基準', path: 'ai-meeting-tool-guide/', category: 'AIツール比較', summary: '料金・精度・保存条件を比較。' },
  { title: '文字起こしサービスの選び方', path: 'transcription-service-guide/', category: '業務効率化', summary: '用途に合う精度と機能を整理。' },
  { title: '在宅勤務のインターネット回線を選ぶ基準', path: 'remote-work-internet-guide/', category: '在宅勤務', summary: '会議やVPNで困らない選び方。' },
  { title: '光回線とホームルーターの違い', path: 'fiber-vs-home-router/', category: '在宅勤務', summary: '工事・速度・契約条件を比較。' },
  { title: '会社員向け生成AIツールの選び方', path: 'business-ai-tool-guide/', category: 'AIツール比較', summary: '用途と情報管理から候補を絞る。' },
  { title: 'AI議事録ツール導入前チェックリスト', path: 'ai-minutes-introduction-checklist/', category: 'AI仕事術', summary: '録音同意と運用ルールを確認。' },
  { title: '在宅勤務用PCの選び方', path: 'remote-work-pc-guide/', category: '在宅勤務', summary: '性能・端子・保証の判断基準。' },
  { title: '短期利用向けポケットWi-Fiの選び方', path: 'pocket-wifi-short-term-guide/', category: '在宅勤務', summary: '総額と返却条件から比較。' },
  { title: '社会人向けAIスクールの選び方', path: 'ai-school-selection-guide/', category: '学び・キャリア', summary: '目的・支援・契約条件を確認。' }
];
