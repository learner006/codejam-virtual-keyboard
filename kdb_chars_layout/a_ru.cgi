use strict;
use CGI(':standard');
use Data::Dumper;
use 5.010;

my $line1CaptionsU = q([]  ~ " � ; % : ? * ( ) _ + []);
my $line1Captions  = q(� ` 1 2 3 4 5 6 7 8 9 0 - = Backspace);


my $line2CaptionsU = q([]  [] [] [] [] [] [] [] [] [] [] [] [] / []);
my $line2Captions  = q(Tab �  �  �  �  �  �  �  �  �  �  �  �  \ Del);

my $line3CaptionsU = q([]   [] [] [] [] [] [] [] [] [] [] [] []);
my $line3Captions  = q(Caps �  �  �  �  �  �  �  �  �  �  �  Enter);

my $line4Captions = q([]    [] [] [] [] [] [] [] [] [] , [] []);
my $line4Captions = q(Shift �  �  �  �  �  �  �  �  �  .  ^ Shift);

my $line5CaptionsU = q([]   []  []  []    []  []  []   [] [] [] []);
my $line5Captions  = q(Ctrl Win Alt Space Alt Mnu Ctrl <  v  >  Fn );
 