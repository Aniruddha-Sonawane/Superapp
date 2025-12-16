import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://ickbaqyxqclhkmofiwen.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlja2JhcXl4cWNsaGttb2Zpd2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NDM5NzYsImV4cCI6MjA4MTQxOTk3Nn0.jZwrjotEmO3rWGeUiL48tmleF8FvyQAFR4Gq4SFKXvU'
);
