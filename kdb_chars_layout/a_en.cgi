use strict;
use CGI(':standard');
use Data::Dumper;
use 5.010;

my $line1CaptionsU = q([]  ~ ! @ # $ % ^ & * ( ) _ + []);
my $line1Captions  = q(Esc ` 1 2 3 4 5 6 7 8 9 0 - = Backspace);

my $line2CaptionsU = q([]  [] [] [] [] [] [] [] [] [] [] { } | []);
my $line2Captions  = q(Tab q  w  e  r  t  y  u  i  o  p  [ ] \ Del);

my $line3CaptionsU = q([]   [] [] [] [] [] [] [] [] [] : " []);
my $line3Captions  = q(Caps a  s  d  f  g  h  j  k  l  ; ' Enter);

my $line4Captions = q([]    [] [] [] [] [] [] [] < > ? [] []);
my $line4Captions = q(Shift z  x  c  v  b  n  m  , . / ^  Shift);

my $line5CaptionsU = q([]   []  []  []    []  []  []   [] [] [] []);
my $line5Captions  = q(Ctrl Win Alt Space Alt Mnu Ctrl <  v  >  Fn );
 