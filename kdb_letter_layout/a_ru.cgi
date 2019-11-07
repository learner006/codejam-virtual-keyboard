use strict;
use CGI(':standard');
use Data::Dumper;
use 5.010;

my $line1CaptionsU = q([]  ~ " ¹ ; % : ? * ( ) _ + []);
my $line1Captions  = q(¸ ` 1 2 3 4 5 6 7 8 9 0 - = Backspace);


my $line2CaptionsU = q([]  [] [] [] [] [] [] [] [] [] [] [] [] / []);
my $line2Captions  = q(Tab é  ö  ó  ê  å  í  ã  ø  ù  ç  õ  ú  \ Del);

my $line3CaptionsU = q([]   [] [] [] [] [] [] [] [] [] [] [] []);
my $line3Captions  = q(Caps ô  û  â  à  ï  ð  î  ë  ä  æ  ý  Enter);

my $line4Captions = q([]    [] [] [] [] [] [] [] [] [] , [] []);
my $line4Captions = q(Shift ÿ  ÷  ñ  ì  è  ò  ü  á  þ  .  ^ Shift);

my $line5CaptionsU = q([]   []  []  []    []  []  []   [] [] [] []);
my $line5Captions  = q(Ctrl Win Alt Space Alt Mnu Ctrl <  v  >  Fn );
 