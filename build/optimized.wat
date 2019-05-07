(module
 (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
 (type $FUNCSIG$v (func))
 (memory $0 1)
 (data (i32.const 8) "\b2\00\00\00{\00\"\00q\00u\00e\00s\00t\00i\00o\00n\00s\00\"\00:\00[\00[\00\"\00H\00a\00s\00 \00a\00 \00t\00h\00r\00o\00a\00x\00\"\00,\00[\00\"\00a\00n\00t\00\"\00,\00\"\00e\00l\00k\00\"\00,\00\"\00c\00o\00w\00\"\00,\00\"\00d\00o\00g\00\"\00,\00\"\00c\00a\00t\00\"\00,\00\"\00o\00w\00l\00\"\00]\00]\00,\00[\00\"\00I\00s\00 \00a\00 \00F\00e\00l\00i\00n\00e\00\"\00,\00[\00\"\00c\00a\00t\00\"\00,\00\"\00e\00l\00k\00\"\00,\00\"\00c\00o\00w\00\"\00,\00\"\00d\00o\00g\00\"\00,\00\"\00a\00n\00t\00\"\00,\00\"\00o\00w\00l\00\"\00]\00]\00,\00[\00\"\00I\00s\00 \00a\00 \00B\00o\00v\00i\00n\00e\00\"\00,\00[\00\"\00c\00o\00w\00\"\00,\00\"\00e\00l\00k\00\"\00,\00\"\00c\00a\00t\00\"\00,\00\"\00d\00o\00g\00\"\00,\00\"\00a\00n\00t\00\"\00,\00\"\00o\00w\00l\00\"\00]\00]\00]\00}")
 (table $0 1 funcref)
 (elem (i32.const 0) $assembly/index/ducks)
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "getQuests" (func $assembly/index/getQuests))
 (export "ducks" (func $assembly/index/ducks))
 (func $assembly/index/getQuests (; 0 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  i32.const 8
 )
 (func $assembly/index/ducks (; 1 ;) (type $FUNCSIG$v)
  nop
 )
)
