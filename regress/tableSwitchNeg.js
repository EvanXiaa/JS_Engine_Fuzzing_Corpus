function f(a) {
  switch (a) {
    case -1:
      return 1;

    case -2:
      return 2;

    case -5:
      return 5;

    default:
      return 10;
  }
}

f(-1);
1;
f(-2);
2;
f(-5);
5;
f(-3);
10;
f(-6);
10;
f(0);
10;
f(1);
10;
f(-2147483647);
10;
f(-2147483648);
10;
f(-2147483649);
10;
f(2147483647);
10;
f(2147483648);
10;
f(2147483649);
10;
