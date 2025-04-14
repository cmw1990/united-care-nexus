
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-foreground flex items-center gap-1">
          <Globe className="h-4 w-4" />
          <span>{t('language.label')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'bg-accent/50' : ''}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('zh-CN')}
          className={language === 'zh-CN' ? 'bg-accent/50' : ''}
        >
          简体中文
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('zh-TW')}
          className={language === 'zh-TW' ? 'bg-accent/50' : ''}
        >
          繁體中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
